import axios from "axios";
import {
  GET_HOMEDATA_ERROR,
  GET_HOMEDATA_LOADING,
  GET_HOMEDATA_SUCCESS,
} from "./actionTypes";

export const getHomeData = () => async (dispatch) => {
  dispatch({
    type: GET_HOMEDATA_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get("http://localhost:7000/home");
    dispatch({
      type: GET_HOMEDATA_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_HOMEDATA_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_HOMEDATA_LOADING,
      payload: true,
    });
  }
};
