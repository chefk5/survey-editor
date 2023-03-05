import { Box, Button, Text } from '@chakra-ui/react'
import { IPage } from 'interfaces'
import React from 'react'
import useSurveyStore from 'zustand/Store'

type Props = {}

const blankPage: IPage = {
  name: 'page1',
  elements: [
    {
      type: 'text',
      name: 'question1',
      title: 'question',
      isRequired: true
    }
  ]
}

const PageControl = (props: Props) => {
  const addPage = useSurveyStore((state) => state.addPage)
  const pages = useSurveyStore((state) => state.pages)

  const blankPage: IPage = {
    name: `page ${pages.length + 1}`,
    elements: [
      {
        type: 'text',
        name: 'question1',
        title: 'question',
        isRequired: true
      }
    ]
  }

  return (
    <Box
      justifyContent="center"
      alignContent="center"
      display="flex"
      height="100%"
    >
      <Button onClick={() => addPage(blankPage)}>
        Add page {pages.length + 1}
      </Button>
    </Box>
  )
}

export default PageControl
