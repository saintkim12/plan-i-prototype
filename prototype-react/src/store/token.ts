import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleToken } from '/src/components/storage'
import { getToken as asyncGetToken, isTokenValid, removeToken as asyncRemoveToken } from '/src/components/GoogleAuthentication'

const getToken = createAsyncThunk('token/getToken', asyncGetToken)
const removeToken = createAsyncThunk('token/removeToken', asyncRemoveToken)
const initToken = createAsyncThunk('token/initToken', async () => {
  try {
    const token = await asyncGetToken()
    return token
  } catch (e) {
    console.error(e)
    console.error('Error in', 'initToken')
    return null
  }
})
const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: <GoogleToken | null> null,
    loaded: false,
    valid: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => { Object.assign(state, { loaded: true, token: action.payload, valid: isTokenValid(action.payload) }) })
    builder.addCase(removeToken.fulfilled, (state) => { Object.assign(state, { token: null }) })
    builder.addCase(initToken.fulfilled, (state, action) => { Object.assign(state, { loaded: true, token: action.payload, valid: isTokenValid(action.payload) }) })
  }
})


export { getToken, removeToken, initToken }
export default tokenSlice.reducer
