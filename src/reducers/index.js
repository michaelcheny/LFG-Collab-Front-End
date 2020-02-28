import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import tokenReducer from "./tokenReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  token: tokenReducer
});

export default rootReducer;
