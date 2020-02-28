import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import authorizationReducer from "./authorizationReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  authorizationReducer
});

export default rootReducer;
