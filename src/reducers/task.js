import { TASK_ADD, TASK_COMPLETE, TASKS_LOADED } from "../actions/task";
import { normalizeTasks } from "../normalizeState";

const initialState = {
  tasksById: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD: {
      return {
        ...state,
        tasksById: {
          ...state.tasksById,
          [action.payload.id]: action.payload,
        },
      };
    }
    case TASK_COMPLETE: {
      const oldTask = state.tasksById[action.payload.id];

      const newTask = { ...oldTask, completed: action.payload.completed };

      return {
        ...state,
        tasksById: {
          ...state.tasksById,
          [action.payload.id]: newTask,
        },
      };
    }
    case TASKS_LOADED: {
      if (action.payload === undefined) return state;

      return {
        ...state,
        tasksById: normalizeTasks(action.payload),
      };
    }
    default:
      return state;
  }
};
