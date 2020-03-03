import { LOGGING_IN, LOG_IN, LOGGING_OUT, LOG_OUT } from "./actionTypes";

export const Login = (csrf_token, email, password) => {
  return async dispatch => {
    try {
      console.log(csrf_token, email, password);
      dispatch({ type: LOGGING_IN });
      const res = await fetch("http://localhost:3001/api/v1/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrf_token
        },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      });
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({
        type: LOG_IN,
        payload: {
          id: data.id,
          email: data.email,
          name: data.name,
          authenticated: true
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Logout = token => {
  return async dispatch => {
    try {
      // dispatch({ type: LOGGING_OUT });
      const res = await fetch("http://localhost:3001/api/v1/logout", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          // "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        credentials: "include"
      });
      dispatch({ type: LOG_OUT });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
};
