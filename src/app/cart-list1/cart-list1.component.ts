import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-list1',
  templateUrl: './cart-list1.component.html',
  styleUrls: ['./cart-list1.component.scss']
})
export class CartList1Component implements OnInit {
  products: any = [];
  constructor(private cartService: CartServiceService) {

   }

  ngOnInit(): void {


    this.cartService.getProducts().subscribe((productJson) => {
      if (productJson) {
        this.products = productJson;
        this.products = this.products.items;
      }
    })
  }

  addtocart(product:any) {
    product.action = "add";
    this.cartService.setProduct(product);
    
  }

}
