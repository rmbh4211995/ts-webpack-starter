import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Dropdown, DropdownProps, DropdownItem } from '../client/src/components/Dropdown'

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  selectedItem: { label: '🍎', value: 'Apple' },
  onSelect: (item) => console.log(item),
  items: [
    { label: '🍎', value: 'Apple' },
    { label: '🍐', value: 'Pear' },
    { label: '🍌', value: 'Banana' },
  ],
}

export const DownshiftProps = Template.bind({})
DownshiftProps.args = {
  selectedItem: { label: '🐍', value: 'Snake' },
  onSelect: (item: DropdownItem) => console.log(item),
  downshiftProps: { itemToString: (item: DropdownItem) => item && item.label },
  items: [
    { label: '🐲', value: 'Dragon' },
    { label: '🐍', value: 'Snake' },
    { label: '🐝', value: 'Bee' },
  ],
}
