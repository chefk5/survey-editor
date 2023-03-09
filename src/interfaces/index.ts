export interface ISurveyState {
  title: string
  description: string
  pages: IPage[]
  changeHeader: (title: string, description: string) => void
  addPage: (page: IPage) => void
  //addQuestion: (pageNumber: number, question: IQuestion) => void
  changeQuestionType: (pageNumber: number, question: IQuestion) => void
}

export interface IPage {
  name: string
  elements: IQuestion[]
}

export interface IQuestion {
  type: string
  name: string
  title: string
  isRequired: boolean
  choices?: []
}
