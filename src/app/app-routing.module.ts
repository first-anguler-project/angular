import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PackageComponent } from './package/package.component';
import { BagsComponent } from "src/app/bags/bags.component";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BagsCategoryComponent } from './bags-category/bags-category.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { DressComponent } from './dress/dress.component';
import { TdfsignupComponent } from './tdfsignup/tdfsignup.component';
import { TdfformComponent } from './nav/tdfform/tdfform.component';




const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"details" ,component:BagsComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"package",component:PackageComponent},
  {path:"bag",component:BagsCategoryComponent},
  {path:"makeup",component:MakeUpComponent},
  {path:"dress",component:DressComponent},
  {path:"bag-details",component:BagsComponent},
  {path:"login",component:TdfformComponent},
  {path:"details" ,component:BagsComponent},
  {path:"Bags" ,component:BagsCategoryComponent},
  {path:"signup" ,component:TdfsignupComponent},
  {path:"**",component:PageNotFoundComponent}
  

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
