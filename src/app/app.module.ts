import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BagsComponent } from './bags/bags.component';
import{HttpClientModule} from '@angular/common/http';
import {AllProductService}from '../services/all-product.service';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PackageComponent } from './package/package.component';
import { BagsCategoryComponent } from './bags-category/bags-category.component';
import { GetBagsProductsService } from "src/services/get-bags-products.service";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { DressComponent } from './dress/dress.component';
import { TdfsignupComponent } from './tdfsignup/tdfsignup.component';
import { TdfformComponent } from './nav/tdfform/tdfform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BagsComponent,
    HeaderComponent,
    WishlistComponent,
    PackageComponent,
    BagsCategoryComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MakeUpComponent,
    DressComponent,
    TdfsignupComponent,
    TdfformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [
    AllProductService,
    GetBagsProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
