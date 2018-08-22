import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {

  private todos: Todo[] = [];

  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = this.todoService.list();
  }

}
