import React from 'react'
import { Button } from '@zendeskgarden/react-buttons'
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg'

const ExampleButton = () => (
  <Button>
    <Button.StartIcon>
      <LeafIcon />
    </Button.StartIcon>
    Media
  </Button>
)

export default ExampleButton
