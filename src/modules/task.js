export class Task {
  constructor(
    title,
    { description = "", dueDate = null, priority = "low", done = false } = {}
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
  }
}
