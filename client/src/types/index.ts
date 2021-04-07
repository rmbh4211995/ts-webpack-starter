export enum FieldType {
  text = 'text',
  email = 'email',
  date = 'date',
  checkbox = 'checkbox',
}

export interface FieldConditional {
  name: string
  show_if: (value: any) => boolean
}

export interface FormField {
  tag: string
  name: string
  type: FieldType
  human_label: string
  conditional?: FieldConditional
}
