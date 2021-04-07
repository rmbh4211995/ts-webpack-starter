import React from 'react'
import { FormField } from '../types'
import classNames from 'classnames'

export default ({ field, formik }: { formik: any; field: FormField }) => {
  const { handleBlur, handleChange, values, errors, touched } = formik
  const hasLogic = field.conditional?.show_if
  const show = hasLogic ? field.conditional?.show_if(values[field.conditional.name]) : true
  const error = touched[field.name] && errors[field.name]
  const value = values[field.name]

  return (
    <div className={classNames('inline-flex my-4 mr-10', !show && 'invisible')}>
      <div>
        <label className='uppercase text-sm font-semibold block mb-2' htmlFor={field.name}>
          {field.human_label}
        </label>
        <input
          className={classNames(
            `border rounded active:border-blue-200 py-1 pl-2`,
            error ? 'border-red-500' : 'border-grey-200',
          )}
          type={field.type}
          name={field.name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className={classNames('mt-1 text-sm italic h-3 text-red-500', error ? 'visible' : 'invisible')}>
          {error}
        </div>
      </div>
    </div>
  )
}
