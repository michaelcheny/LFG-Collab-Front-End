import {
  LOADING_PROJECTS,
  ADD_PROJECTS,
  ADD_MY_PROJECTS,
  ADD_CURRENT_PROJECT,
  ADD_COMMENT
} from "../actions/actionTypes";

const projectsReducer = (
  state = {
    projects: [],
    personalProjects: [],
    currentProject: [],
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
    case ADD_MY_PROJECTS:
      return {
        ...state,
        personalProjects: action.payload,
        loading: false
      };
    case ADD_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          comments: [...state.currentProject.comments, action.payload]
        }
      };
    default:
      return state;
  }
};

export default projectsReducer;
