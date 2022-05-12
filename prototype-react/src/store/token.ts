import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleToken } from '/src/components/storage'
import { getToken as asyncGetToken } from '/src/components/GoogleAuthentication'

const getToken = createAsyncThunk('token/getToken', asyncGetToken)
const tokenSlice = createSlice({
  name: 'token',
  initialState: { token: <GoogleToken | null> null },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => { state.token = action.payload })
  }
})


export { getToken }
export default tokenSlice.reducer
