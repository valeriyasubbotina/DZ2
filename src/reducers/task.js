import { TASK_ADD, TASK_COMPLETE } from "../actions/task";
import normalizeState from "../normalizeState";

const projects = require("../projects.json");

const initialState = {
  lastTaskId: 6,
  tasksById: normalizeState(projects).tasksById,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD: {
      const newTask = {
        id: ++state.lastTaskId,
        name: action.payload.name,
        description: action.payload.description,
        completed: false,
      };

      return {
        ...state,
        lastTaskId: state.lastTaskId,
        tasksById: {
          ...state.tasksById,
          [newTask.id]: newTask,
        },
      };
    }
    case TASK_COMPLETE: {
      const oldTask = state.tasksById[action.payload.id];

      const newTask = { ...oldTask, completed: !action.payload.completed };

      return {
        ...state,
        tasksById: {
          ...state.tasksById,
          [action.payload.id]: newTask,
        },
      };
    }
    default:
      return state;
  }
};
