import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit {
  private todoForm: any;
  private todos: Todo[] = [];

  constructor(
    public todoService: TodoService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {

  }

  ngOnInit() {
    //this.todos = this.todoService.list();
    this.todoForm = this.formBuilder.group({
      description: '',
      completed: '',
      priority: ''
    });
  }

  onSubmit() {
   this.todoService.create(
     this.todoForm.get('description').value,
     this.todoForm.get('priority').value,
     Boolean(this.todoForm.get('completed').value)
   );

   this.router.navigate(['/tasks']);
 }

}
