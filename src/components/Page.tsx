import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text
} from '@chakra-ui/react'
import { IPage, IQuestion } from 'interfaces'

import useSurveyStore from 'zustand/Store'
import QuestionControl from './QuestionControl'

type Props = {
  index: number
  page: IPage
  //   addQuestion: (index: number) => void
}

type QuestionTypes = {
  singleInput: string
  radioGroup: string
  dropdown: string
}

const questionTypes: QuestionTypes = {
  singleInput: 'singleInput',
  radioGroup: 'radioGroup',
  dropdown: 'dropdown'
}

const borderStyle = {
  border: '0.5px solid black',
  borderRadius: 4,
  padding: 5,
  marginBottom: 5
}

const Page = ({ page, index }: Props) => {
  const [questionType, setQuestionType] = useState<string>(
    questionTypes.singleInput
  )
  const changeQuestionType = useSurveyStore((state) => state.changeQuestionType)

  const addQuestionFunc = (index: number) => {
    // addQuestion(index, blankQuestion)
  }

  const componentsRef = useRef(null)
  const SelectedPage = useSurveyStore((state) => state.pages)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuestionType(event.target.value)
  }

  useEffect(() => {
    componentsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [componentsRef])

  return (
    <>
      <Box
        borderRadius={4}
        bg={'#f7f7ff'}
        marginY={5}
        padding={5}
        ref={componentsRef}
      >
        <Text marginBottom={2}>{page.name}</Text>
        {questionType === questionTypes.singleInput && (
          <Box marginBottom={5}>
            <Editable defaultValue="" placeholder="Add question">
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Input placeholder="Answer will be here" />
          </Box>
        )}
        {questionType === questionTypes.radioGroup && (
          <Box marginBottom={5}>
            <Editable defaultValue="" placeholder="Add question">
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 1"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 2"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 3"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 4"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
          </Box>
        )}
        {questionType === questionTypes.dropdown && (
          <Box marginBottom={5}>
            <Editable defaultValue="" placeholder="Add question">
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 1"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 2"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 3"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
            <Editable
              defaultValue=""
              placeholder="option 4"
              style={borderStyle}
            >
              <EditablePreview />
              <EditableInput paddingLeft={1} />
            </Editable>
          </Box>
        )}

        <Box
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'row'}
        >
          <Select
            placeholder="Select option"
            width={'40%'}
            defaultValue={'option1'}
            size={'xs'}
            onChange={handleSelectChange}
            value={questionType}
          >
            <option value={questionTypes.singleInput}>Single input</option>
            <option value={questionTypes.radioGroup}>Radio group</option>
            <option value={questionTypes.dropdown}>Dropdown</option>
          </Select>
          <Checkbox defaultChecked>Mandatory</Checkbox>
        </Box>
      </Box>
      <QuestionControl index={index} />
    </>
  )
}

export default Page
