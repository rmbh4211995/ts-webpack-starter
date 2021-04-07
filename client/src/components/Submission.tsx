import React from 'react'

export default ({ submission }: { submission: Record<string, string> | undefined }) =>
  submission ? (
    <div className='flex justify-center items-center h-full'>
      <div className='flex flex-col items-center'>
        <div className='mb-2 w-full'>
          <h1 className='text-lg text-gray-500'>Form successfully sent!</h1>
          <p className='text-2xl text-blue-600 mb-10'>Below is a copy of your submission.</p>
        </div>

        <div className='mb-4 w-full'>
          {Object.entries(submission).map(([key, value]) => (
            <div key={key} className='flex text-gray-400'>
              <span className='font-bold pr-3'>{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <p className='mt-3 text-blue-500 w-full'>We appreciate your time and will get back to you shortly~</p>
      </div>
    </div>
  ) : null
