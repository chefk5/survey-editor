import { IPage, ISurveyState } from 'interfaces'
import { create } from 'zustand'

const useSurveyStore = create<ISurveyState>()((set) => ({
  title: '',
  description: '',
  pages: [],

  changeHeader: (title, description) =>
    set(() => ({ title: title, description: description })),

  addPage: (page: IPage) =>
    set((state) => ({
      pages: [...state.pages, page]
    }))
}))

export default useSurveyStore
