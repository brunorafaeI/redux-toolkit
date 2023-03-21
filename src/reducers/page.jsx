import { createSlice } from '@reduxjs/toolkit'

export const pageMapper = {
  PAGE_LOGIN: 'PAGE_LOGIN',
  PAGE_DASHBOARD: 'PAGE_DASHBOARD'
}

const pageSlice = createSlice({
  name: 'page-content',
  initialState: {
    page: pageMapper.PAGE_LOGIN,
  },
  reducers: {
    getPageContent(state => {
      console.log(state)
    })
  },
})

export const { getPageContent } = pageSlice.actions

export default pageSlice.reducer