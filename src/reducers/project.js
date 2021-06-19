import { PROJECT_ADD, PROJECTS_LOADED } from "../actions/project";
import { normalizeProjects } from "../normalizeState";

const initialState = {
  projectsById: [],
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_LOADED: {
      if (action.payload === undefined) return state;

      return {
        ...state,
        projectsById: normalizeProjects(action.payload),
      };
    }
    case PROJECT_ADD: {
      return {
        ...state,
        projectsById: {
          ...state.projectsById,
          [action.payload.id]: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
