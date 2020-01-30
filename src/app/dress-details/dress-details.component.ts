import { Component, OnInit } from '@angular/core';
import { AllProductService } from "src/services/all-product.service";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dress-details',
  templateUrl: './dress-details.component.html',
  styleUrls: ['./dress-details.component.css']
})
export class DressDetailsComponent implements OnInit {
  public dressdetails;
  public dressid={};
  constructor(private getproduct:AllProductService, private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe((param:ParamMap)=>{
      this. dressid=param.get("_id")
    })
     this.getproduct.getdressdetails(this. dressid).subscribe(data => this.dressdetails=data 
     
      )
      console.log(this.dressdetails)
  }

}
