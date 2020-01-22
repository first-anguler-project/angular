import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagsComponent } from "src/app/bags/bags.component";
import { BagsCategoryComponent } from "src/app/bags-category/bags-category.component";


const routes: Routes = [
  {path:"details" ,component:BagsComponent},
  {path:"Bags" ,component:BagsCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
