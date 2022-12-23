class Todo {
  constructor(
    title,
    description = "",
    dueDate = null,
    priority = "low",
    finished = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  }
}

class Project {
  todoList = [];
  constructor(name, description = "", finished = false) {
    this.name = name;
    this.description = description;
    this.finished = finished;
  }
}
