import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL = "http://localhost:8080/api/v1/bookCategories/1/book"

  constructor(private http: HttpClient) { }

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL)
  }
}
