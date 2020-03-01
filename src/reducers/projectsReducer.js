import {
  LOADING_PROJECTS,
  ADD_PROJECTS,
  LOADING_MY_PROJECTS,
  ADD_MY_PROJECTS
} from "../actions/actionTypes";

const projectsReducer = (
  state = {
    projects: [],
    personalProjects: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case LOADING_PROJECTS:
      return { ...state, loading: true };
    case ADD_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case LOADING_MY_PROJECTS:
      return { ...state, loading: true };
    case ADD_MY_PROJECTS:
      return {
        ...state,
        personalProjects: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default projectsReducer;
