import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './interface/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = 'http://localhost:8080/category';

  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL);
  }

  getCategoryById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/${id}`);
  }

  createCategory(category: Category): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.API_URL}/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/${id}`);

  }
}
