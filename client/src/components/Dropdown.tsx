import React from 'react'
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns'

interface DropdownItem {
  label: string
  value: string
}

const Example = ({
  selectedItem,
  onSelect,
  downshiftProps,
  items,
}: {
  selectedItem: DropdownItem
  onSelect: (item: string) => void
  downshiftProps: Record<string, unknown>
  items: DropdownItem[]
}) => {
  return (
    <Dropdown selectedItem={selectedItem} onSelect={onSelect} downshiftProps={downshiftProps}>
      <Field>
        <Label>Houseplant</Label>
        <Select>{selectedItem.label}</Select>
      </Field>
      <Menu>
        {items.map((option) => (
          <Item key={option.value} value={option}>
            {option.label}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  )
}

export default Example
