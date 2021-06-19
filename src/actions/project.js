import apiService from "../api";

export const PROJECT_ADD = "PROJECT_ADD";
export const PROJECTS_LOADED = "PROJECTS_LOADED";

export const handleProjectAdd = (name) => (dispatch) => {
  apiService.postProject(name).then((newProject) => {
    dispatch({
      type: PROJECT_ADD,
      payload: newProject,
    });
  });
};

export const handleLoadProjects = () => (dispatch) => {
  apiService.getProjects().then((projects) => {
    dispatch({
      type: PROJECTS_LOADED,
      payload: projects,
    });
  });
};
