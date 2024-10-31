import { Todo } from 'src/app/models/todo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private dataSubject = new BehaviorSubject<Todo[]>([]);
  data = this.dataSubject.asObservable();

  private url = 'http://localhost:3000/todos';
  todos: Todo[] | undefined;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  get() {
    this.http.get<Todo[]>(this.url).subscribe((data) => {
      this.dataSubject.next(data);
    });
  }

  toggleTodoCompletion(todo: Todo) {
    const todoToPut = { ...todo, completed: !todo.completed };

    return this.http
      .put<Todo>(`${this.url}/${todo.id}`, todoToPut)
      .subscribe(() => this.get());
  }

  post(todo: Todo) {
    return this.http.post<Todo>(this.url, todo).subscribe(() => this.get());
  }

  delete(todoId?: string) {
    if (!todoId) return;
    this.http.delete(`${this.url}/${todoId}`).subscribe(() => this.get());
  }
}
