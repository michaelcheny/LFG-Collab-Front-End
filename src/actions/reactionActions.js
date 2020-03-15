import { ADD_REACTION } from "./actionTypes";

export const createComment = (projectId, token, reaction) => {
  return async dispatch => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/reactions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          reaction: {
            reaction
          },
          projectId
        }),
        credentials: "include"
      });
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({ type: ADD_REACTION, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
