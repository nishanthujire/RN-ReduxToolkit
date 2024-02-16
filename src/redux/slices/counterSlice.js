import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  val: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.val += 1;
    },
    decrement: state => {
      state.val -= 1;
    },
    incrementByAmount: (state, action) => {
      state.val += action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
