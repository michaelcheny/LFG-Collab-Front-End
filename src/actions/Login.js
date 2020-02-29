import { LOG_IN } from "./actionTypes";

export const Login = (csrf_token, email, password) => {
  return async function(dispatch) {
    try {
      dispatch({
        type: LOG_IN,
        payload: {
          email: email,
          password: password
        }
      });
      console.log(csrf_token, email, password);
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
      return await res.json();
      call the add user to the user state HEREEEREREERERERER
    } catch (error) {
      console.log(error);
    }
  };
};
