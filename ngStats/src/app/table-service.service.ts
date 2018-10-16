import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<Question[]>{
    return this.http.get<Question[]>(this.serviceUrl)
  }

}
