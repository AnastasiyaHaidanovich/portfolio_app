import { makeAutoObservable } from 'mobx';
import { getData, storeData } from './store';

class Todos {
  todos = []
  todo = {}

  constructor() {
    makeAutoObservable(this);
    getData().then(res => !!res && res.map((todo) => this.setTodo(todo)));
  }

  setTodoText(text) {
    this.todo.text = text;
  }

  setTodo(data) {
    this.todo.id = this.todos.length + 1
    this.todo.text = data.text;
    this.todo.done = data.done || false;
    this.todos.push(this.todo);
    this.clearTodo();
    storeData(this.todos);
  }

  setTodoDone(id) {
    this.todos.map((todo) => {if (todo.id == id) todo.done = !todo.done})
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    storeData(this.todos);
  }

  clearTodo() {
    this.todo = {};
  }
}

export default new Todos();