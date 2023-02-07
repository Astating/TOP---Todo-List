import { Storage } from "./localStorage";
import { Project } from "./project";

export class TodoList {
  static projectsList = [];

  static initialize() {
    console.log({ blue: Storage.getProjectsList() });

    TodoList.projectsList = TodoList.projectsList.concat(
      Storage.getProjectsList() ?? new Project("Everything")
    );

    console.log({ pl: TodoList.projectsList });
  }

  static addProject(project) {
    TodoList.projectsList.push(project);
  }
}
