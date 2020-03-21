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
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country
        },
        authenticated: !!action.payload.authenticated,
        loading: false
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        authenticated: false
      };
    default:
      return state;
  }
};

export default userReducer;
