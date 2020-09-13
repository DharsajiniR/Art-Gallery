import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
  
}