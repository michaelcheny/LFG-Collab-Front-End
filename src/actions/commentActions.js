import { ADD_COMMENT } from "./actionTypes";

export const createComment = (projectId, token, content) => {
  // const { name, description, category } = project;
  return async dispatch => {
    try {
      console.log(content);
      console.log(token);
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
      // do something hereeeee
    } catch (error) {
      console.log(error.message);
    }
  };
};
