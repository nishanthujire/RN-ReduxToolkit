import types from '../types';

let init_state = {
  userData: {
    age:10
  },
};

export default function (state = init_state, action) {
  switch (action.type) {
    case types.LOGIN: {
      let data = action.payload;
      console.log('inside login', data);
      return {...state, userData: data};
    }
    case types.SIGNUP: {
      let data = action.payload;
      return {...state, userData: data};
    }
    default:
      return {...state};
  }
}
