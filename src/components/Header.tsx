import { Box, Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <Box flex={1}>
      <Editable
        defaultValue=""
        padding={2}
        placeholder="Add survey title"
        borderBottom="0.5px solid black"
      >
        <EditablePreview />
        <EditableInput paddingLeft={1} />
      </Editable>
      <Editable
        defaultValue=""
        padding={2}
        placeholder="Add survey description"
        borderBottom="0.5px solid black"
      >
        <EditablePreview />
        <EditableInput paddingLeft={1} />
      </Editable>
    </Box>
  )
}

export default Header
