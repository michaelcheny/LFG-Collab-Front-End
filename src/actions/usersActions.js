import {
  LOGGING_IN,
  LOG_IN,
  LOG_OUT,
  CLEAR_TOKEN,
  SIGNING_UP,
  GET_TOKEN,
  ADD_TOKEN
} from "./actionTypes";

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
    return data.csrf_auth_token;
  };
};

export const Login = (token, email, password) => {
  return async dispatch => {
    try {
      console.log(token, email, password);
      dispatch({ type: LOGGING_IN });
      const res = await fetch("http://localhost:3001/api/v1/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
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
      dispatch({ type: CLEAR_TOKEN });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
};

export const Signup = (token, user) => {
  return async dispatch => {
    try {
      dispatch({ type: SIGNING_UP });
      const res = await fetch("http://localhost:3001/api/v1/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({ user: user }),
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
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
      alert(error.message);
    }
  };
};
