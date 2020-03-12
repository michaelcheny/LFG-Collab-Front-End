import {
  LOADING_PROJECTS,
  ADD_PROJECTS,
  ADD_MY_PROJECTS,
  ADD_CURRENT_PROJECT
} from "./actionTypes";

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
      // console.log(data.projects);
      dispatch({ type: ADD_MY_PROJECTS, payload: data.projects });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createProject = (token, project) => {
  const { name, description, category } = project;
  return async dispatch => {
    try {
      console.log(project);
      console.log(token);
      const res = await fetch("http://localhost:3001/api/v1/projects", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          project: {
            name,
            description
          },
          category
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

export const fetchProject = id => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING_PROJECTS });
      const res = await fetch(`http://localhost:3001/api/v1/projects/${id}`);
      const data = await res.json();
      console.log(data);
      dispatch({ type: ADD_CURRENT_PROJECT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
