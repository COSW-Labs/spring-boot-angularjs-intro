import { Todo } from './todo';

import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
      new Todo('todo 1'),
      new Todo('todo 2', 1, true),
      new Todo('todo 3')
    ];

  constructor() { }

  list(): Todo[] {
    return this.todos;
  }
}
