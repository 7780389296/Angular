import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  public url:string="http://localhost:9082/categoriesList"
  public ur12:string="http://localhost:9082/add"

  
  public getAllCategoriesFromDatabase(): Observable<category[]> {
    return this.http.get<category[]>(this.url);
  }
  addDataToServer(data: any): Observable<category> {
    return this.http.post<category>(this.ur12, data);
  }
}
