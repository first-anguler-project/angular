import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showdress=[];
  public showMakeup=[];
  public bags=[];
 // public allproducts=[];
  constructor(private getall:AllProductService,private getproduct:AllProductService) { }

  ngOnInit() {
    this.getall.getdress().subscribe(data=>{
      console.log(data)
      this.showdress=data
  })
  this.getall.getmakeup().subscribe(data=>{
    console.log(data)
    this.showMakeup=data
   
   } )
   this.getproduct.getproduct().subscribe(data =>
    this.bags=data
  );

  
}
}