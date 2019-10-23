import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from './todo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'api/todos';

  constructor(
    private http: HttpClient
  ) { }


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      catchError(this.handleError<Todo[]>('getTodos', []))
    );
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }

  updateTodo (todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl, todo, httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  addTodo (todo: Todo): Observable<any> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).pipe(
      catchError(this.handleError<any>('addTodo'))
    );
  }

  deleteTodo (todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions).pipe(
      catchError(this.handleError<any>('deleteTodo'))
    );
  }

  private handleError<T> (operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
