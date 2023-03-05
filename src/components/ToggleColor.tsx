import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

//toggle color of page
export default function ToggleColor() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justify={'flex-end'} m={'1rem'}>
      <Button onClick={() => toggleColorMode()}>
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  )
}
