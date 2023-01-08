export class Project {
  taskList = [];

  constructor(name, { description = "", done = false } = {}) {
    this.name = name;
    this.description = description;
    this.done = done;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    this.taskList = this.taskList.filter((item) => item === task);
  }

  resetProject() {
    this.taskList = [];
  }
}
