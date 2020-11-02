import axios from "axios";

const setAuthToken = token => {
    if(token) {
        //Apply an auth token to every request if a 
        // user is logged in 
        axios.defaults.headers.common["Authorization"] =  token;
    } else {
        // if a user is logged out remove the header token
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;