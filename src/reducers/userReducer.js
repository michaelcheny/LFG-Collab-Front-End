import { LOG_IN, LOG_OUT, UPDATE_USER } from "../actions/actionTypes";

const userReducer = (
  state = {
    user: {},
    authenticated: false
  },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          image: action.payload.image,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country
        },
        authenticated: true
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          image: action.payload.image,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country
        }
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
