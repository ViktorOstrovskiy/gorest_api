import { API } from "../../core/api";
import { getErrorData } from "../../core/helpers/error";
import {
  GET_USERS,
  GET_USER,
  EDIT_USER,
  CHANGE_PAGE,
  SET_ERROR_USERS,
  SET_ERROR_EDIT_USER,
  SET_ERROR_USER,
  RESET_SUCCESS,
  SET_PAGINATION,
} from "./action-types";
export const getUsers = (page, gender) => async (dispatch) => {
  try {
    const { data, headers } = await API.get(
      `users?page=${page}&gender=${gender}`
    );

    const getusers = data;
    const pagination = {
      totalCount: headers["x-pagination-total"],
      perPage: headers["x-pagination-limit"],
    };
    dispatch(setUsers(getusers));
    dispatch(setPagination(pagination));
  } catch (err) {
    dispatch(setErrorPayloadUsers(err));
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await API.get(`users/${id}`);

    const getuser = data;
    dispatch(setUser(getuser));
  } catch (err) {
    dispatch(setErrorPayloadUser(err));
  }
};

export const editUsers = (id, user, navigate) => async (dispatch) => {
  try {
    const data = await API.put(
      `users/${id}?access-token=6ff03e8b23cbc9a3b9253c495f588a30cdb3853f4cf415ba45054a6f0da4305f`,
      {
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          gender: user.gender,
          status: user.status,
        }),
      }
    );
    dispatch(editUser());
    if (data !== undefined) {
      setTimeout(() => navigate("/users"), 2500);
    }
  } catch (err) {
    dispatch(setErrorPayloadEditUser(err));
  }
};

const setUsers = (data) => ({
  type: GET_USERS,
  payload: data,
});

const setUser = (data) => ({
  type: GET_USER,
  payload: data,
});

const editUser = () => ({
  type: EDIT_USER,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

const setErrorPayloadUsers = (error) => ({
  type: SET_ERROR_USERS,
  payload: { error: getErrorData(error) },
});

const setErrorPayloadUser = (error) => ({
  type: SET_ERROR_USER,
  payload: { error: getErrorData(error) },
});

const setErrorPayloadEditUser = (error) => ({
  type: SET_ERROR_EDIT_USER,
  payload: { error: getErrorData(error) },
});

export const resetError = () => (dispatch) => {
  dispatch({
    type: SET_ERROR_USER,
    payload: { error: null },
  });
};

export const resetSuccess = () => (dispatch) => {
  dispatch({
    type: RESET_SUCCESS,
  });
};

export const setPagination = (pagination) => ({
  type: SET_PAGINATION,
  payload: pagination,
});
