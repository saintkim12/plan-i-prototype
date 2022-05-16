import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleToken } from '/src/components/storage'
import { getToken as asyncGetToken } from '/src/components/GoogleAuthentication'

const getToken = createAsyncThunk('token/getToken', asyncGetToken)
const initToken = createAsyncThunk('token/initToken', async () => {
  try {
    const token = await asyncGetToken()
    if (token) {
      const { accessToken, createdIn, expiresIn } = token
      const valid = accessToken && Date.now() <= createdIn + expiresIn
      // if (!valid) {}
      console.log('token is', valid ? 'valid' : 'not valid')
    }
    console.log('initToken', token)
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
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => { Object.assign(state, { loaded: true, token: action.payload }) })
    builder.addCase(initToken.fulfilled, (state, action) => { Object.assign(state, { loaded: true, token: action.payload }) })
  }
})


export { getToken, initToken }
export default tokenSlice.reducer
