import { GET_TOKEN, ADD_TOKEN } from "./actionTypes";

export const getToken = () => {
  return async dispatch => {
    dispatch({ type: GET_TOKEN });
    const res = await fetch("http://localhost:3001/api/v1/auth-check", {
      credentials: "include"
    });
    const data = await res.json();
    dispatch({
      type: ADD_TOKEN,
      payload: data.csrf_auth_token
    });
  };
};
