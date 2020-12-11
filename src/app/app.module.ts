

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartServiceService } from './cart-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CartList1Component } from './cart-list1/cart-list1.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartCalComponent } from './cart-cal/cart-cal.component';
// import { HttpClient } from 'selenium-webdriver/http';



@NgModule({
  declarations: [
    AppComponent,
    CartList1Component,
    CartHeaderComponent,
    CartCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

