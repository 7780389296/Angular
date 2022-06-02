import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../models/category';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
private getAllUrl:string="http://localhost:9081/products"

private url2:string="http://localhost:9081/updateProduct"
private url3:string="http://localhost:9081//deleteProduct/"
private url4:string="http://localhost:9081/add"
private url5:string="http://localhost:9081/findByProductsId"


  public getAllProductsFromDatabase(): Observable<product[]> {
    return this.http.get<product[]>(this.getAllUrl);
  }
  public addDataToServer(data: any): Observable<category> {
    return this.http.post<category>(this.url4, data);
  }
  public updateDataToServer(data: any): Observable<category> {
    return this.http.put<category>(this.url2, data);
  }
  public getDataFromServer(data: number): Observable<category> {
    return this.http.get<category>(this.url5 +"/" + data);
  }

  // public deleteDataToServer(data: any): Observable<category> {
  //   return this.http.delete<category>(this.url3, data);
  // }

}
