import React from 'react'
import { Button as ZDButton } from '@zendeskgarden/react-buttons'
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg'

export interface ButtonProps {
  isPrimary?: boolean
  isDanger?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ isPrimary, isDanger, disabled, size }: ButtonProps) => (
  <ZDButton isPrimary={isPrimary} isDanger={isDanger} disabled={disabled} size={size}>
    <ZDButton.StartIcon>
      <LeafIcon />
    </ZDButton.StartIcon>
    Media
  </ZDButton>
)

export default Button
