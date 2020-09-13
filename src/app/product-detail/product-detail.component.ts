import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public  products: Product[] = [];
  public imageWidth = 250;
  public imageMargin = 2;
  public currentId : number;
   constructor(private productService: ProductService,private router : Router,private act:ActivatedRoute) { 
    this.currentId = this.act.snapshot.params['Id'];
   }
 
   ngOnInit(): void {
     this.productService.getProducts().subscribe({
       next: products => {
         this.products = products.filter(x => x.productId == this.currentId);
       }
     });
   }

}
