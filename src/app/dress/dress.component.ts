import { Component, OnInit } from '@angular/core';
import { AllProductService } from "src/services/all-product.service";

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  public showdress=[];

  constructor(private getall:AllProductService) { }

  ngOnInit() {
    this.getall.getdress().subscribe(data=>{
      console.log(data)
      this.showdress=data
     
     } )
  }

}
