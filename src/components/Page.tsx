import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Text
} from '@chakra-ui/react'
import { IPage } from 'interfaces'
import React from 'react'
import useSurveyStore from 'zustand/Store'

type Props = {
  index: number
  page: IPage
}

const Page = ({ page, index }: Props) => {
  const SelectedPage = useSurveyStore((state) => state.pages)
  return (
    <Box borderRadius={4} bg={'#f7f7ff'} marginY={5} padding={5}>
      <Text marginBottom={2}>{page.name}</Text>
      <Editable defaultValue="" placeholder="Add survey question">
        <EditablePreview />
        <EditableInput paddingLeft={1} />
      </Editable>
    </Box>
  )
}

export default Page
