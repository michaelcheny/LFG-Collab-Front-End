import {
  LOGGING_IN,
  LOG_IN,
  LOG_OUT,
  UPDATE_USER
} from "../actions/actionTypes";

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
      // let img;
      // action.payload.image === ""
      //   ? (img =
      //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png")
      //   : (img = action.payload.image);
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
        authenticated: !!action.payload.authenticated,
        loading: false
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
