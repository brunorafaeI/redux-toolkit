import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { Dashboard, Login, Profile, Product } from '../pages'

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
        state.pageContent = pageMapper[pageLabel] && pageLabel
      }
    },
  },
})

export function getPageComponent() {
  const { pageContent } = useSelector(state => state.pageReducer)

  if (pageContent) {
    const pageLabel = String(pageContent).toUpperCase()

    if (pageMapper[pageLabel]) {
      const Component = eval(pageMapper[pageLabel])
      return <Component />
    }
  }
}


const { actions, reducer } = pageContentSlice
export const  usePageContent = () => actions

export default reducer
