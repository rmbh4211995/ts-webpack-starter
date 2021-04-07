import React from 'react'
import { PALETTE } from '@zendeskgarden/react-theming'
import { Spinner } from '@zendeskgarden/react-loaders'

export default () => (
  <Spinner
    style={{
      height: 50,
      left: '50%',
      position: 'absolute',
      top: '35%',
      transform: 'translate(-50%, 50%)',
      width: 50,
    }}
    delayMS={0}
    size='80px'
    color={PALETTE.blue[600]}
  />
)
