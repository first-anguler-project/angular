import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TdfformComponent } from './nav/tdfform/tdfform.component';
import { HttpClientModule } from '@angular/common/http';
import { TdfsignupComponent } from './tdfsignup/tdfsignup.component';
@NgModule({
  declarations: [
    AppComponent,
    TdfformComponent,
    TdfsignupComponent
=======
import { ProductsComponent } from './products/products.component';
import { BagsComponent } from './bags/bags.component';
import{HttpClientModule} from '@angular/common/http';
import {AllProductService}from '../services/all-product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BagsComponent
>>>>>>> 9408a28fae4ae655af2af7a1e64ae2dcb08b68d9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
   HttpClientModule 
   
=======
    HttpClientModule,
    
  ],
  providers: [
    AllProductService
>>>>>>> 9408a28fae4ae655af2af7a1e64ae2dcb08b68d9
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
