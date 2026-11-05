import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('token')

const initialState = {
  token: token,
  isAuthenticated: Boolean(token),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },

    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer