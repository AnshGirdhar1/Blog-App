import { legacy_createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { signupReducer } from "./signupReducer/signupReducer";
import thunks from "redux-thunk";
import { loginReducer } from "./loginReducer/loginReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login : loginReducer
});

const middleware = applyMiddleware(thunks);

export const store = legacy_createStore(rootReducer, middleware);
