import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  token: tokenReducer,
  user: userReducer,
  comments: commentReducer
});

export default rootReducer;
