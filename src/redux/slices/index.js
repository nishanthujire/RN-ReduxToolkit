import { combineReducers } from "redux";
import auth from "./authSlice";
import counterReducer from "./counterSlice";


const appReducer = combineReducers({
    auth:auth,
    counter:counterReducer
})

export default appReducer