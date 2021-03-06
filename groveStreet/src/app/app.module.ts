import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FirstPageComponent } from './first-page/first-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent} from './Products/product-list.component';

import { NavbartestComponent } from './navbartest/navbartest.component';



@NgModule({
  declarations: [
    AppComponent,

    FirstPageComponent,
    NavigationBarComponent,
    AllProductsComponent,
    CategoryComponent,
    ProductListComponent,

    NavbartestComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
