import {
  LOADING_COMMENTS,
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "../actions/actionTypes";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case LOADING_COMMENTS:
      return {
        ...state,
        loading: true
      };

    case GET_COMMENTS:
      return action.payload;

    case UPDATE_COMMENT:
      return state.map((comment, index) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        }
        return comment;
      });

    case ADD_COMMENT:
      return [...state, action.payload];

    case DELETE_COMMENT:
      const comments = state.filter(comment => comment.id !== action.payload);
      return comments;

    default:
      return state;
  }
};

export default commentsReducer;
