export class Project {
  _todoList = [];
  constructor(name, { description = "", done = false } = {}) {
    this._name = name;
    this._description = description;
    this._done = done;
  }

  get todoList() {
    return this._todoList;
  }

  addTodo(todo) {
    this._todoList.push(todo);
  }

  removeTodo(todo) {
    const index = this._todoList.indexOf(todo);
  }
}
