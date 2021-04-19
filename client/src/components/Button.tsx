import React from 'react'
import { Button as ZDButton } from '@zendeskgarden/react-buttons'

export interface ButtonProps {
  isPrimary?: boolean
  isDanger?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ isPrimary, isDanger, disabled, size }: ButtonProps) => (
  <ZDButton isPrimary={isPrimary} isDanger={isDanger} disabled={disabled} size={size}>
    Click me
  </ZDButton>
)

export default Button
