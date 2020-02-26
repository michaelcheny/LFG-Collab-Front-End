const projectsReducer = (
  state = {
    projects: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    case "LOADING_PROJECTS":
      return { ...state, loading: true };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default projectsReducer;
