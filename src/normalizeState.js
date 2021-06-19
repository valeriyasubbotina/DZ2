export const normalizeProjects = (projectArray) => {
  return projectArray.reduce((data, item) => {
    data[item.id] = {
      id: item.id,
      name: item.name,
      tasksCount: item.tasksCount,
    };

    return data;
  }, {});
};

export const normalizeTasks = (tasksArray) => {
  return tasksArray.reduce((data, item) => {
    data[item.id] = {
      id: item.id,
      name: item.name,
      description: item.description,
      completed: item.completed,
      priority: item.priority,
    };

    return data;
  }, {});
};
