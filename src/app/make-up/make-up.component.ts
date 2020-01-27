import { Component, OnInit } from '@angular/core';
import { AllProductService } from "src/services/all-product.service";

@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.css']
})
export class MakeUpComponent implements OnInit {
  public showMakeup=[];

  constructor(private getall:AllProductService) { }

  ngOnInit() {
    this.getall.getmakeup().subscribe(data=>{
      console.log(data)
      this.showMakeup=data
     
     } )
  }

}
