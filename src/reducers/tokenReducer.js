import { GETTING_TOKEN, ADD_TOKEN, CLEAR_TOKEN } from "../actions/actionTypes";

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
        loading: true
      };
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
        loading: false
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default tokenReducer;
