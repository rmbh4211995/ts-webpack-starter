import React from 'react'
import classNames from 'classnames'

export enum CurrentSide {
  front = 'front',
  back = 'back',
}

const FlipCard = ({
  frontSide,
  backSide,
  currentSide,
}: {
  frontSide: any
  backSide: any
  currentSide: CurrentSide
}) => {
  return (
    <div className='flip-card bg-transparent border' style={{ width: 1000, height: 650 }}>
      <div
        className={classNames(
          'flip-card-inner relative w-full h-full shadow-lg rounded',
          currentSide === CurrentSide.back && 'flip-transform',
        )}
      >
        <div className='flip-card-front flex absolute h-full'>{frontSide}</div>
        <div
          className={classNames(
            'flip-card-back text-white h-full',
            currentSide === CurrentSide.back && 'flip-transform',
          )}
        >
          {backSide}
        </div>
      </div>
    </div>
  )
}

export default FlipCard
