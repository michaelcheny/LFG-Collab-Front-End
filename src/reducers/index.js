import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  token: tokenReducer,
  user: userReducer
});

export default rootReducer;
