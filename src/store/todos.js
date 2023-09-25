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
    this.todos.map((todo) => {if (todo.id == id) todo.done = !todo.done})
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  clearTodo() {
    this.todo = {};
  }
}

export default new Todos();