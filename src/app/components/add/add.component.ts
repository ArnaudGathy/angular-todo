import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddComponent {
  router = inject(Router);
  todosService = inject(TodoService);

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  addTodo() {
    this.todosService.post({
      title: this.addForm.value.title ?? '',
      description: this.addForm.value.description ?? '',
      completed: false,
    });
    this.router.navigate(['/']);
  }
}
