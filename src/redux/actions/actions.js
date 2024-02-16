import { DELETE_POSTS, POSTS } from '../../config/urls';
import { apiDelete, apiGet } from '../../utils/Utils';
import types from '../types';

export const increment = data => dispatch => {
  dispatch({
    type: types.INCREMENT,
    payload: data,
  });
};

export const decrement = data => dispatch => {
  dispatch({
    type: types.DECREMENT,
    payload: data,
  });
};

export const login = data => dispatch => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export const singup = data => dispatch => {
  dispatch({
    type: types.SIGNUP,
    payload: data,
  });
};

export function getPosts() {
    return apiGet(POSTS)
}

export function deletePost(id) {
    return apiDelete(DELETE_POSTS + `${id}`)
}
