export class Todo {
  constructor(
    title,
    { description = "", dueDate = null, priority = "low", done = false } = {}
  ) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._done = done;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }
  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }
  set priority(value) {
    this._priority = value;
  }

  get done() {
    return this._done;
  }
  set done(value) {
    this._done = value;
  }
}
