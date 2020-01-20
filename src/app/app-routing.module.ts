import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagsComponent } from "src/app/bags/bags.component";


const routes: Routes = [
  {path:"details" ,component:BagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
