import { Box, Flex, Text } from '@chakra-ui/react'
import Avatar from 'components/Avatar'
import Header from 'components/Header'
import Page from 'components/Page'
import PageControl from 'components/PageControl'
import ToggleColor from 'components/ToggleColor'
import useSurveyStore from 'zustand/Store'
import useBearStore from 'zustand/Store'

function App() {
  const pages = useSurveyStore((state) => state.pages)

  return (
    <>
      {/* <ToggleColor /> */}
      <Box marginX={'20%'} marginY={10}>
        <Header />
        {pages.map((page, index) => (
          <Page page={page} index={index} key={index} />
        ))}
        <PageControl />
      </Box>
    </>
  )
}

export default App
