import {
  LOADING_PROJECTS,
  ADD_PROJECTS,
  ADD_MY_PROJECTS,
  ADD_CURRENT_PROJECT,
  ADD_REACTION,
  DELETE_REACTION,
  JOIN_PROJECT,
  UPDATE_PROJECT
} from "../actions/actionTypes";
import { act } from "react-dom/test-utils";

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

    case UPDATE_PROJECT:
      return {
        ...state,
        currentProject: action.payload
      };

    case JOIN_PROJECT:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          users: [...state.currentProject.users, action.payload]
        }
      };

    // case ADD_COMMENT:
    //   return {
    //     ...state,
    //     currentProject: {
    //       ...state.currentProject,
    //       comments: [...state.currentProject.comments, action.payload]
    //     }
    //   };

    // case UPDATE_COMMENT:
    //   const allComments = [...state.currentProject.comments];
    //   console.log(allComments);
    //   const idx = allComments.findIndex(comment => {
    //     console.log(comment);
    //     return comment.id === action.payload.id;
    //   });
    //   console.log(idx);
    //   console.log(state.currentProject.comments[idx]);

    //   return {
    //     ...state,
    //     currentProject: {
    //       ...state.currentProject,
    //       comments: [...state.currentProject.comments],
    //       ...state.currentProject.comments,
    //       [idx]: action.payload
    //     }
    //   };

    // case DELETE_COMMENT:
    //   const comments = state.currentProject.comments.filter(
    //     comment => comment.id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     currentProject: {
    //       ...state.currentProject,
    //       comments: comments
    //     }
    //   };

    case ADD_REACTION:
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          reactions: [...state.currentProject.reactions, action.payload]
        }
      };

    case DELETE_REACTION:
      const reactions = state.currentProject.reactions.filter(
        reaction => reaction.id !== action.payload
      );
      return {
        ...state,
        currentProject: {
          ...state.currentProject,
          reactions: reactions
        }
      };

    default:
      return state;
  }
};

export default projectsReducer;
