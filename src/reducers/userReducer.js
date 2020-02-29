import { LOGGING_IN, LOG_IN, LOG_OUT } from "../actions/actionTypes";

const userReducer = (
  state = {
    user: {},
    authenticated: false,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loading: true
      };
    case LOG_IN:
      console.log(action.payload);
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email
        },
        authenticated: !!action.payload.authenticated,
        loading: false
      };
    case LOG_OUT:
      return {
        ...state,
        user: {}
      };
    default:
      return state;
  }
};

export default userReducer;
