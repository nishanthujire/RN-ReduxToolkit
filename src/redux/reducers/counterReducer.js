import types from '../types';

let init_state = {
  val: 0,
};

export default function (state = init_state, action) {
  switch (action.type) {
    case types.INCREMENT: {
      let data = action.payload;
      console.log('Incremnet reducer call', data);
      return {...state, val: data + 1};
    }
    case types.DECREMENT: {
      let data = action.payload;
      return {...state, val: data - 1};
    }
    default:
      return {...state};
  }
}
