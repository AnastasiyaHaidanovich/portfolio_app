import { makeAutoObservable } from 'mobx';
import { getData, storeData } from './storage';
import{ DateTime } from 'luxon';

class Store {
  todos = []
  selectedDate = DateTime.now().toFormat('dd.MM.yy')

  constructor() {
    makeAutoObservable(this);
    getData().then(res => !!res && res.map((todo) => this.setTodo(todo)));
  }

  setTodo({data}) {
    this.todos.push({
      date: this.selectedDate,
      data: {
        id: this.todos.length + 1,
        text: data.text,
        done: data.done || false
      }
    });
    storeData(this.todos);
  }

  setTodoDone(id) {
    this.todos.map((todo) => {if (todo.data.id == id) todo.data.done = !todo.data.done});
    storeData(this.todos);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.data.id !== id);
    storeData(this.todos);
  }

  setSelectedDate(date) {
    this.selectedDate = date.toFormat('dd.MM.yy');
  }
}

export default new Store();