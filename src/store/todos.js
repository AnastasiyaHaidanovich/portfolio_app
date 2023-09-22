import { makeAutoObservable } from 'mobx';

class Todos {
  todos = []
  todo = {}

  constructor() {
    makeAutoObservable(this);
  }

  setTodoText(text) {
    this.todo.text = text;
  }

  setTodo(data) {
    this.todo.id = this.todos.length + 1
    this.todo.text = data;
    this.todo.done = false;
    this.todos.push(this.todo);
    this.clearTodo();
  }

  setTodoDone(id) {
    this.todos[id-1].done = !this.todos[id-1].done
  }

  clearTodo() {
    this.todo = {};
  }
}

export default new Todos();