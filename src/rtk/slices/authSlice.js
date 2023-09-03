import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name :'auth',
  initialState : '',
  reducers : {
    'login' : (state, action) => {
      return action.payload
    },
  }

})