import { PROJECT_ADD, PROJECT_ADD_TASK } from "../actions/project";
import normalizeState from "../normalizeState";

const projects = require("../projects.json");

const initialState = {
  lastProjectId: 3,
  projectsById: normalizeState(projects).projectsById,
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ADD: {
      const newProject = {
        id: ++state.lastProjectId,
        name: action.payload,
        tasksIds: [],
      };

      return {
        ...state,
        lastProjectId: state.lastProjectId,
        projectsById: {
          ...state.projectsById,
          [newProject.id]: newProject,
        },
      };
    }
    case PROJECT_ADD_TASK: {
      const oldProject = state.projectsById[action.payload.projectId];

      const newProject = {
        ...oldProject,
        tasksIds: [...oldProject.tasksIds, action.payload.taskId],
      };

      return {
        ...state,
        projectsById: {
          ...state.projectsById,
          [action.payload.projectId]: newProject,
        },
      };
    }
    default:
      return state;
  }
};
