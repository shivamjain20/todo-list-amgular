import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [
      ]
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }


  }
  ngOnInit(): void {

  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) { // only splice array when item is found
      this.todos.splice(index, 1); // 2nd parameter means remove one item only
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    console.log(todo);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo); // 2nd parameter means remove one item only
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) { // only splice array when item is found
      this.todos[index].active = !this.todos[index].active // 2nd parameter means remove one item only
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}
