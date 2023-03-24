import { createSlice } from '@reduxjs/toolkit'

export const pageMapper = {
  LOGIN: 'Login',
  DASHBOARD: 'Dashboard',
  PROFILE: 'Profile',
  PRODUCT: 'Product',
}

const pageContentSlice = createSlice({
  name: 'page-content',
  initialState: {
    pageContent: pageMapper.LOGIN,
  },
  reducers: {
    setPageContent:(state, { payload }) => {
      const { pageContent } = payload

      if (pageContent) {
        const pageLabel = String(pageContent).toUpperCase()
        state.pageContent = pageMapper[pageLabel]
      }
    },
  },
})


const { actions, reducer } = pageContentSlice
export const  usePageContent = () => actions

export default reducer
