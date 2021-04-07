import React, { useState } from 'react'
import * as Yup from 'yup'

import Form from './Form'
import Container from './Container'
import FlipCard, { CurrentSide } from './FlipCard'

import { FieldType, FormField } from '../types'
import Submission from './Submission'

export const formSchema: FormField[] = [
  {
    tag: 'input',
    name: 'first_name',
    type: FieldType.text,
    human_label: 'First Name',
  },
  {
    tag: 'input',
    name: 'last_name',
    type: FieldType.text,
    human_label: 'Last Name',
  },
  {
    tag: 'input',
    name: 'email',
    type: FieldType.email,
    human_label: 'Email Address',
  },
  {
    tag: 'input',
    name: 'phone_number',
    type: FieldType.text,
    human_label: 'Phone Number',
  },
  {
    tag: 'input',
    name: 'job_title',
    type: FieldType.text,
    human_label: 'Job Title',
  },
  {
    tag: 'input',
    name: 'date_of_birth',
    type: FieldType.date,
    human_label: 'Date of Birth',
  },
  {
    tag: 'input',
    name: 'parental_consent',
    type: FieldType.checkbox,
    human_label: 'Parental Consent',
    conditional: {
      name: 'date_of_birth',
      show_if: (dateStr?: string): boolean => {
        if (!dateStr) return false

        const now = new Date()
        const value = new Date(dateStr)

        return value >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate())
      },
    },
  },
]

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object({
  first_name: Yup.string().min(4, 'Must be 4 characters or more').required('Required'),
  last_name: Yup.string().min(4, 'Must be 4 characters or more').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  job_title: Yup.string().optional(),
  date_of_birth: Yup.string().required('Required'),
  parental_consent: Yup.boolean().optional(),
})

const ContactForm = () => {
  const [submission, setSubmission] = useState<Record<string, string> | undefined>()

  const onSubmit = (value: Record<string, string>) => setSubmission(value)

  return (
    <div className='m-20 flex justify-center items-center'>
      <Container>
        <FlipCard
          currentSide={submission === undefined ? CurrentSide.front : CurrentSide.back}
          frontSide={
            <div className='flex'>
              <div className='flex flex-col w-2/5'>
                <img
                  className='h-full'
                  src='https://images.squarespace-cdn.com/content/v1/555d0cbde4b0315ddec1483c/1532978807069-BIU6G5C77JZ41VWH7MT7/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwwQIrqN0bcqL_6-iJCOAA0qwytzcs0JTq1XS2aqVbyK6GtMIM7F0DGeOwCXa63_4k/Soft+Blue+Hexagons+-+S.jpg'
                />
              </div>
              <div className='flex flex-col w-3/5'>
                <Form
                  title='Contact Us'
                  formSchema={formSchema}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          }
          backSide={<Submission submission={submission} />}
        />
      </Container>
    </div>
  )
}
export default ContactForm
