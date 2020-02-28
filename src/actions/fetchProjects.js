import { LOADING_PROJECTS, ADD_PROJECTS } from "./actionTypes";

export const fetchProjects = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING_PROJECTS });
      const res = await fetch("http://localhost:3001/api/v1/projects/");
      const data = await res.json();
      dispatch({ type: ADD_PROJECTS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
