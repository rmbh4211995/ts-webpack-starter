import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../client/src/components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isPrimary: true,
  size: 'medium',
}

export const Danger = Template.bind({})
Danger.args = {
  isPrimary: false,
  isDanger: true,
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  isPrimary: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  isPrimary: true,
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
