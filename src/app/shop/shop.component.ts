import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public  products: Product[] = [];
  public imageWidth = 250;
  public imageMargin = 2;
  public data: string;
   constructor(private productService: ProductService,private router : Router) { }
 
   ngOnInit(): void {
     this.productService.getProducts().subscribe({
       next: products => {
         this.products = products;
       }
     });
   }

}
