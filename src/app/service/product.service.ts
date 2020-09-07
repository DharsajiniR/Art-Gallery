import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';
  private productUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data)))
      );
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.productId === id))
      );
  }

  
}