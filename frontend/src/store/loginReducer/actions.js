import axios from "axios";
import {
  VERIFY_USER_FAILURE,
  VERIFY_USER_LOADING,
  VERIFY_USER_SUCCESS,
} from "./actionTypes";

export const verifyUser = (signupData) => async (dispatch) => {
  dispatch({
    type: VERIFY_USER_LOADING,
    payload: true,
  });
  try {
    let res = await axios.post("http://localhost:7000/login", signupData);
    localStorage.setItem("token", res.data);
    dispatch({
      type: VERIFY_USER_SUCCESS,
      payload: true,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_USER_FAILURE,
      payload: true,
    });
  } finally {
    dispatch({
      type: VERIFY_USER_FAILURE,
      payload: false,
    });
  }
};
