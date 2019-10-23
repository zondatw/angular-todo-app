import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'Coding',
        description: 'Write some code.',
      },
      {
        id: 2,
        title: 'Eating',
        description: 'Eat some food.',
      },
      {
        id: 3,
        title: 'Sleeping',
        description: 'Want some sleep.',
      },
      {
        id: 4,
        title: 'test',
        description: 'Just test.',
      },
    ];

    return {todos};
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

  constructor() { }
}
