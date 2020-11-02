import { GET_ERRORS } from "../actions/types";

const initialState = {};
// Create a reducer to handle errors in our application
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
