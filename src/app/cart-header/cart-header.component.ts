import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {
  cartProductCout:number=0;
  constructor(private cartService:CartServiceService) {
    this.cartService.callcartUpdate$.subscribe((isChanged)=>{
      if(isChanged) {
        this.cartProductCout = this.cartService.getProductCount()
      }
    });
  }

  ngOnInit(): void {
  }

}