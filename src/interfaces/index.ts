export interface ISurveyState {
  title: string
  description: string
  pages: IPage[]
  changeHeader: (title: string, description: string) => void
  addPage: (page: IPage) => void
}

export interface IPage {
  name: string
  elements: [
    {
      type: string
      name: string
      title: string
      isRequired: boolean
    }
  ]
}
