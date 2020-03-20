import {
  LOADING_COMMENTS,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  LOADING_PROJECTS
} from "./actionTypes";

export const getComments = ({ id }) => {
  return async dispatch => {
    dispatch({ type: LOADING_COMMENTS });
    const res = await fetch(
      `http://localhost:3001/api/v1/projects/${id}/comments`,
      {
        credentials: "include"
      }
    );
    const data = await res.json();
    dispatch({
      type: GET_COMMENTS,
      payload: data
    });
    // return data;
  };
};

export const createComment = (projectId, token, content) => {
  return async dispatch => {
    try {
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
      dispatch({ type: ADD_COMMENT, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const EditComment = (commentId, token, content) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/v1/comments/${commentId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": token
          },
          body: JSON.stringify({
            comment: {
              content
            }
          }),
          credentials: "include"
        }
      );
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      // dispatch({ type: ADD_COMMENT, payload: data });
      // add dispatch ehre
      console.log(data);
      dispatch({ type: UPDATE_COMMENT, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteComment = (token, commentId) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/v1/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": token
          },
          credentials: "include"
        }
      );
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({ type: DELETE_COMMENT, payload: data.id });
    } catch (error) {
      console.log(error.message);
    }
  };
};
