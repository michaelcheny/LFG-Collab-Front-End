import {
  LOADING_PROJECTS,
  ADD_PROJECTS,
  ADD_MY_PROJECTS,
  ADD_CURRENT_PROJECT,
  JOIN_PROJECT,
  GET_COMMENTS
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
      dispatch({ type: ADD_MY_PROJECTS, payload: data.projects });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createProject = (token, project) => {
  const { name, description, category, online, team_size } = project;
  return async dispatch => {
    try {
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
            description,
            online,
            team_size
          },
          category
        }),
        credentials: "include"
      });
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const joinProject = (token, projectId) => {
  return async dispatch => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/user_projects", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          projectId
        }),
        credentials: "include"
      });
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({ type: JOIN_PROJECT, payload: data });
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
      dispatch({ type: ADD_CURRENT_PROJECT, payload: data });
      dispatch({ type: GET_COMMENTS, payload: data.comments });
    } catch (error) {
      console.log(error);
    }
  };
};
