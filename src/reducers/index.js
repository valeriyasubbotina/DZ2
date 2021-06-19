import { combineReducers } from "redux";

import { projectsReducer } from "./project";
import { tasksReducer } from "./task";

export const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
});
