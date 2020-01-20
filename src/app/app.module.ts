import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BagsComponent } from './bags/bags.component';
import{HttpClientModule} from '@angular/common/http';
import {AllProductService}from '../services/all-product.service';
import { BagsCategoryComponent } from './bags-category/bags-category.component';
import { GetBagsProductsService } from "src/services/get-bags-products.service";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BagsComponent,
    BagsCategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    AllProductService,
    GetBagsProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
