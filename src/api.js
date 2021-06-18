import { get, post, put } from "./request";

class ApiService {
  static async getProjects() {
    return get("/projects/");
  }

  static async postProject(name) {
    return post("/projects/", { name });
  }

  static async getProjectTasks(projectId) {
    return get(`/projects/${projectId}/tasks/`);
  }

  static async postTask(name, description, projectId) {
    return post(`/projects/${projectId}/tasks/`, {
      name,
      description,
    });
  }

  static async completeTask(task, projectId) {
    return put(`/projects/${projectId}/tasks/${task.id}/`, {
      id: task.id,
      name: task.name,
      description: task.description,
      completed: task.completed,
      priority: task.priority,
      projectId: +projectId,
    });
  }
}

export default ApiService;
