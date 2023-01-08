export class TodoList {
  static projectsList = [];
  static tasksList = [];

  static initialize() {}

  addProject(project) {
    TodoList.projectsList.push(project);
  }
}
