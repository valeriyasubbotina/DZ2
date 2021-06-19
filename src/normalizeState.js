const normalizeState = (projectArray) => {
  let state = {};

  state.projectsById = projectArray.reduce((data, item) => {
    data[item.id] = {
      id: item.id,
      name: item.name,
      tasksIds: item.tasks.map((task) => task.id),
    };

    return data;
  }, {});

  state.tasksById = projectArray
    .reduce((data, item) => {
      data = [...data, ...item.tasks];

      return data;
    }, [])
    .reduce((data, item) => {
      data[item.id] = item;

      return data;
    }, {});

  return state;
};

export default normalizeState;
