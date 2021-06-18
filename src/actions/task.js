import apiService from "../api";

export const TASK_ADD = "TASK_ADD";
export const TASK_COMPLETE = "TASK_COMPLETE";
export const TASKS_LOADED = "TASKS_LOADED";

export const handleTaskAdd = (name, description, projectId) => (dispatch) => {
  apiService.postTask(name, description, projectId).then((newTask) => {
    dispatch({
      type: TASK_ADD,
      payload: newTask,
    });
  });
};

export const handleTaskComplete = (task, projectId) => (dispatch) => {
  apiService.completeTask(task, projectId).then(() => {
    dispatch({
      type: TASK_COMPLETE,
      payload: {
        id: task.id,
        completed: task.completed,
      },
    });
  });
};

export const handleLoadTasks = (projectId) => (dispatch) => {
  return apiService.getProjectTasks(projectId).then((tasks) => {
    dispatch({
      type: TASKS_LOADED,
      payload: tasks,
    });
  });
};
