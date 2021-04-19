import React from 'react'
import { Dropdown as ZDDropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns'

export interface DropdownItem {
  label: string
  value: string
}

export interface DropdownProps {
  selectedItem: DropdownItem
  onSelect: (item: string) => void
  downshiftProps?: Record<string, unknown>
  items: DropdownItem[]
}

export const Dropdown = ({ selectedItem, onSelect, downshiftProps, items }: DropdownProps) => {
  return (
    <ZDDropdown selectedItem={selectedItem} onSelect={onSelect} downshiftProps={downshiftProps}>
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
    </ZDDropdown>
  )
}

export default Dropdown
