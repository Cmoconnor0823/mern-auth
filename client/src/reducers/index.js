import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
// The combineReducers helper function turns
// an object whose values are different reducing
// functions into a single reducing function you
// can pass to createStore. --See Redux documentation 
// for more information
export default combineReducers({
    auth: authReducer,
    errors: errorReducer
});