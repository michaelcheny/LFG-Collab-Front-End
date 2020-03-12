import { ADD_COMMENT } from "./actionTypes";

export const createComment = (projectId, token, content) => {
  // const { name, description, category } = project;
  return async dispatch => {
    try {
      // console.log(content);
      // console.log(token);
      const res = await fetch("http://localhost:3001/api/v1/comments", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          comment: {
            content
          },
          projectId
        }),
        credentials: "include"
      });
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      console.log(data);
      dispatch({ type: ADD_COMMENT, payload: data });
      // do something hereeeee
    } catch (error) {
      console.log(error.message);
    }
  };
};
