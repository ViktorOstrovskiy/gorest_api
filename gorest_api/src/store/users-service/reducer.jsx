import {
  GET_USERS,
  GET_USER,
  EDIT_USER,
  PREV_PAGE,
  CHANGE_PAGE,
  SET_ERROR_USERS,
  SET_ERROR_USER,
  SET_ERROR_EDIT_USER,
  RESET_SUCCESS,
  SET_PAGINATION,
} from "./action-types";

const initialState = {
  users: null,
  pagination: {
    totalCount: 0,
    perPage: 20,
  },
  user: null,
  page: 1,
  error: null,
  success: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };
    case GET_USER:
      return { ...state, user: payload };

    case EDIT_USER:
      return {
        ...state,
        success: true,
      };

    case RESET_SUCCESS:
      return {
        ...state,

        success: false,
      };

    case CHANGE_PAGE:
      return { ...state, page: payload + 1 };

    case SET_ERROR_USERS:
      return { ...state, error: payload };
    case SET_ERROR_USER:
      return { ...state, error: payload };
    case SET_ERROR_EDIT_USER:
      return { ...state, error: payload };

    case SET_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalCount: +payload.totalCount,
          perPage: +payload.perPage,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
