import { Box, Button, Text } from '@chakra-ui/react'
import { IPage, IQuestion } from 'interfaces'
import React, { useCallback } from 'react'
import useSurveyStore from 'zustand/Store'

type Props = {
  //   addQuestion: (index: number) => void
  index: number
}

const QuestionControl = ({ index }: Props) => {
  return (
    <Box
      justifyContent="center"
      alignContent="center"
      display="flex"
      height="100%"
      marginBottom={2}
    >
      <Button onClick={() => console.log('add Question')}>Add Question</Button>
    </Box>
  )
}

export default QuestionControl
