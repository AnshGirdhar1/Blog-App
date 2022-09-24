import {
  ADD_USER_FAILURE,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
} from "./actionTypes";

const signupInitialState = {
  post: {
    success: false,
    loading: false,
    error: false,
  },
};

export const signupReducer = (
  state = signupInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        post: {
          ...state.post,
          success: payload,
        },
      };
    }
    case ADD_USER_LOADING: {
      return {
        ...state,
        post: {
          ...state.post,
          loading: payload,
        },
      };
    }
    case ADD_USER_FAILURE: {
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
