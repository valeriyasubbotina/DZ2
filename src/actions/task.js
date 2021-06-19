export const TASK_ADD = "TASK_ADD";
export const TASK_COMPLETE = "TASK_COMPLETE";

export const handleTaskAdd = (name, description, projectId) => ({
  type: TASK_ADD,
  payload: {
    name,
    description,
    projectId,
  },
});

export const handleTaskComplete = (id, completed) => ({
  type: TASK_COMPLETE,
  payload: {
    id,
    completed,
  },
});
