import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BagsComponent } from './bags/bags.component';
import{HttpClientModule} from '@angular/common/http';
import {AllProductService}from '../services/all-product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    AllProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
