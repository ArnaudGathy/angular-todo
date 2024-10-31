import { Component, inject } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ListComponent {
  todosService = inject(TodoService);
  todos?: Todo[];
  filteredTodos?: Todo[];
  isLoading = true;

  ngOnInit(): void {
    this.todosService.data.subscribe((data) => {
      this.todos = data;
      this.filteredTodos = data;
      this.isLoading = false;
    });
    this.todosService.get();
  }

  handleFilterChange(event: any) {
    const value = (event.target as HTMLOptionElement).value;

    if (value) {
      if (value === 'all') {
        this.filteredTodos = this.todos;
      } else {
        this.filteredTodos = this.todos?.filter(({ completed }) => {
          if (value === 'completed') {
            return completed;
          }
          return !completed;
        });
      }
    }
  }

  handleToggleCompletion(todo: Todo) {
    this.todosService.toggleTodoCompletion(todo);
  }

  handleDelete(todoId?: string) {
    this.todosService.delete(todoId);
  }
}
