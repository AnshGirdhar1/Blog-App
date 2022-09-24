import {
  VERIFY_USER_FAILURE,
  VERIFY_USER_LOADING,
  VERIFY_USER_SUCCESS,
} from "./actionTypes";

const loginInitialState = {
  post: {
    success: false,
    loading: false,
    error: false,
  },
};

export const loginReducer = (state = loginInitialState, { type, payload }) => {
  switch (type) {
    case VERIFY_USER_SUCCESS: {
      return {
        ...state,
        post: {
          ...state.post,
          success: payload,
        },
      };
    }
    case VERIFY_USER_LOADING: {
      return {
        ...state,
        post: {
          ...state.post,
          loading: payload,
        },
      };
    }
    case VERIFY_USER_FAILURE: {
      return {
        ...state,
        post: {
          ...state.post,
          error: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
