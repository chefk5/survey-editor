import { IPage, IQuestion, ISurveyState } from 'interfaces'
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
    })),

  changeQuestionType: (pageNumber: number, question: IQuestion) =>
    set((state) => ({
      pages: state.pages.map((p, index) => {
        if (index === pageNumber) {
          console.log(p)
          return {
            ...p,
            elements: [question]
          }
        }
        return p
      })
    }))

  // addQuestion: (pageNumber: number, question: IQuestion) =>
  //   set((state) => ({
  //     pages: state.pages.map((p, index) => {
  //       if (index === pageNumber) {
  //         console.log(p)
  //         return {
  //           ...p,
  //           elements: [...p.elements, question]
  //         }
  //       }
  //       return p
  //     })
  //   }))
}))

export default useSurveyStore
