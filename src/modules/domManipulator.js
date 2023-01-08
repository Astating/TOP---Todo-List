import { Project } from "./project";
import { Todo } from "./task";

export class DomManipulator {
  static initialize() {
    this.button = document.querySelector("button");
    this.button.addEventListener("click", function () {});
  }
}
