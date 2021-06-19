export const PROJECT_ADD = "PROJECT_ADD";
export const PROJECT_ADD_TASK = "PROJECT_ADD_TASK";

export const handleProjectAdd = (name) => ({
  type: PROJECT_ADD,
  payload: name,
});

export const handleProjectAddTask = (projectId, taskId) => ({
  type: PROJECT_ADD_TASK,
  payload: { projectId, taskId },
});
