import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import { set } from "mongoose";

// Begin axios route to register user in our database
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    // if a user is registered, redirect user to log in
    .then((res = history.pushState("/login")))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Begin axios route to allow user to log in and
// apply auth token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    // once a user posts to login save a token to local storage
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      //now we set the token to the Auth Header
      setAuthToken(token);
      // Now we need to decode the token to get user data
      const decode = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Now we can set our current user with the decoded token info

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Action for user loading

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Action for logging out our user and removing auth token
export const logoutUser = () => dispatch => {
    // remove the user token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header from future requests
    setAuthToken(false);
    // set current user object to {} which will
    // reset isAuthenticated to false
    dispatch(setCurrentUser({}));
};