import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  userData: {
    age: 10,
  },
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      let data = action.payload;
      console.log('inside login', data);
      return {...state, userData: data};
    },
    signup: (state, action) => {
      let data = action.payload;
      console.log('inside login', data);
      return {...state, userData: data};
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, signup} = authSlice.actions;

export default authSlice.reducer;
