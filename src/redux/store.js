import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices';
import {thunk} from 'redux-thunk';
import { applyMiddleware } from 'redux';

//by default redux toolkit has redux-thunk middleware
//const store = configureStore({reducer: appReducer});
//if you need to add middle ware
const middlewares = [thunk]
const store = configureStore({reducer: appReducer},applyMiddleware(...middlewares));


export default store;
