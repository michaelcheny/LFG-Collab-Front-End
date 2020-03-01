import { LOADING_PROJECTS, ADD_PROJECTS, ADD_MY_PROJECTS } from "./actionTypes";

export const fetchProjects = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING_PROJECTS });
      const res = await fetch("http://localhost:3001/api/v1/projects/");
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({ type: ADD_PROJECTS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchPersonalProjects = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING_PROJECTS });
      const res = await fetch(
        "http://localhost:3001/api/v1/personal-projects",
        {
          credentials: "include"
        }
      );
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      console.log(data.projects);
      dispatch({ type: ADD_MY_PROJECTS, payload: data.projects });
    } catch (error) {
      console.log(error.message);
    }
  };
};
