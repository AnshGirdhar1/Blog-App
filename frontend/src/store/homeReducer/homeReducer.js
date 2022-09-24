import {
  GET_HOMEDATA_ERROR,
  GET_HOMEDATA_LOADING,
  GET_HOMEDATA_SUCCESS,
} from "./actionTypes";

const homeIntialState = {
  data: [],
  get: {
    loading: false,
    error: false,
  },
};

export const homeReducer = (state = homeIntialState, { type, payload }) => {
  switch (type) {
    case GET_HOMEDATA_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_HOMEDATA_LOADING: {
      return {
        ...state,
        get: {
          ...state.get,
          loading: payload,
        },
      };
    }
    case GET_HOMEDATA_ERROR: {
      return {
        ...state,
        get: {
          ...state.get,
          error: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
