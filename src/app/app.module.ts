import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BagsComponent } from './bags/bags.component';
import{HttpClientModule} from '@angular/common/http';
import {AllProductService}from '../services/all-product.service';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PackageComponent } from './package/package.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BagsComponent,
    HeaderComponent,
    WishlistComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AllProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
