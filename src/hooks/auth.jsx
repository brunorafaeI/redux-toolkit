import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    isLoggedIn: false
  },
  reducers: {
    SignIn: (state, { payload }) => {
      return {
        state: {
          ...payload,
          isLoggedIn: true
        }
      }

    },
    SignOut: () => {
      state.isLoggedIn = false
    }
  },
})

const { actions, reducer } = authSlice
export const  useAuth = () => actions

export default reducer
