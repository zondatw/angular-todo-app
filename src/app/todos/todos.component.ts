import { Component, OnInit } from '@angular/core';
import {TODOS} from '../mock-todos';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = TODOS;
  selectedTodo: Todo;

  constructor() { }

  ngOnInit() {
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
