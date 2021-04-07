import React, { useState } from 'react'
import { useFormik } from 'formik'
import classNames from 'classNames'
import * as Yup from 'yup'

import Loader from './Loader'
import Field from './Field'

import { FormField } from '../types'

const DynamicForm = ({
  title,
  formSchema,
  validationSchema,
  onSubmit,
}: {
  title: string
  formSchema: FormField[]
  validationSchema: Yup.ObjectSchema<any>
  onSubmit: (values: Record<string, string>) => void
}) => {
  const [hideButton, setHideButton] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formik = useFormik({
    initialValues: formSchema.reduce((acc, cur) => {
      acc[cur.name] = ''

      return acc
    }, {}),
    validationSchema,
    onSubmit: (values: Record<string, string>) => {
      setSubmitted(true)
      setHideButton(true)

      const submission = Object.entries(values).reduce((acc, cur) => {
        const [key, value] = cur
        const label = formSchema.find((field) => field.name === key)?.human_label
        if (label && value !== '') acc[label] = value.toString()

        return acc
      }, {})

      setTimeout(() => {
        setSubmitted(false)
        onSubmit(submission)
      }, 2000)
    },
  })

  return (
    <div className={classNames('ml-5 my-10', submitted && 'opacity-20')}>
      <h1 className='text-3xl font-semibold text-blue-600'>{title}</h1>
      <p className='text-sm mb-3 text-gray-400'>You know you want to</p>
      <form onSubmit={formik.handleSubmit}>
        {formSchema.map((field) => (
          <Field key={field.name} field={field} formik={formik} />
        ))}
        <div className='relative'>
          {submitted ? (
            <Loader />
          ) : (
            <button
              className={classNames(
                'text-xl bg-blue-500 rounded-sm text-white py-2 px-20 mt-10 shadow-lg',
                hideButton && 'invisible',
              )}
              type='submit'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default DynamicForm
