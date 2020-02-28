import { GETTING_TOKEN, ADD_TOKEN } from "../actions/actionTypes";

const tokenReducer = (
  state = {
    token: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case GETTING_TOKEN:
      return {
        ...state,
        // token: action.payload,
        loading: true
      };
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default tokenReducer;
