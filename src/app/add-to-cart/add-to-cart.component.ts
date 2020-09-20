import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public  cartproducts: Product[] = [];
  public imageWidth = 250;
  public imageMargin = 2;
  public total: number = 0;
  public totalItemsInCartDesc;

   constructor(private productService: ProductService,private router : Router) { }

   ngOnInit(): void {
     this.productService.getProducts().subscribe({
       next: products => {
          this.cartproducts = products;
          const totalItemsInCart = this.cartproducts.length;

          if (totalItemsInCart === 0) {
            this.totalItemsInCartDesc = 'No items'
          } else if (totalItemsInCart === 1){
            this.totalItemsInCartDesc = '1 item';
          } else {
            this.totalItemsInCartDesc = totalItemsInCart + ' items';
          }

          this.cartproducts.forEach(element => {
          element.quantity = 1;
          element.totalPrice = element.price;
          this.total += element.totalPrice;
         });
       }
     });
   }

   public qtyDecrease(item : Product) {
    if (item.quantity > 1) {
     item.quantity--;
     item.totalPrice = item.price * item.quantity;
     this.total -= item.price;
    }
   }

   public qtyIncrease(item : Product) {
    item.quantity++;
    item.totalPrice = item.price * item.quantity;
    this.total += item.price;
  }

  public deleteItem(index : number) {
   this.cartproducts.splice(index, 1);
  }

}
