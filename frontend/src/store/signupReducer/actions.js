import {
  ADD_USER_FAILURE,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const addUser = (signupData) => async (dispatch) => {
  dispatch({
    type: ADD_USER_LOADING,
    payload: true,
  });
  try {
    await axios.post("http://localhost:7000/signup", signupData);
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_USER_FAILURE,
      payload: true,
    });
  } finally {
    dispatch({
      type: ADD_USER_LOADING,
      payload: false,
    });
  }
};
