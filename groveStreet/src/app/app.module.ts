import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    NavigationBarComponent,
    AllProductsComponent
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
