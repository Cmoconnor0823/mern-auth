// Below we import everything needed for redux 

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Then we create our initial state and a variable
// to use our middleware
const initialState = {};

const middleware = [thunk];

//Next we create our store with optional parameters
// to take advantage of redux dev tools
const store = createStore (
    () => [],
    initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// finally we export the store so our app has access to it
export default store;