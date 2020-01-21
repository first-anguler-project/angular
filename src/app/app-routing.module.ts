import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  {path:"wishlist",component:WishlistComponent},
  {path:"package",component:PackageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
