export class Storage {
  static saveProjectsList(list) {
    window.localStorage.setItem("projectsList", JSON.stringify(list));
  }

  static getProjectsList() {
    const projectsList = JSON.parse(
      window.localStorage.getItem("projectsList")
    );

    projectsList?.forEach((project) =>
      project.taskList.forEach(
        (task) => (task.dueDate &&= new Date(task.dueDate))
      )
    );

    return projectsList;
  }
}
