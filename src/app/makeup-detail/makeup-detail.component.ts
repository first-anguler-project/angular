import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AllProductService } from "src/services/all-product.service";

@Component({
  selector: 'app-makeup-detail',
  templateUrl: './makeup-detail.component.html',
  styleUrls: ['./makeup-detail.component.css']
})
export class MakeupDetailComponent implements OnInit {
  public makeupdetails;
  public makeupid={};
  constructor( private activeroute:ActivatedRoute,private getproduct:AllProductService) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe((param:ParamMap)=>{
      this.makeupid=param.get("_id")
    })
     this.getproduct.getmakeupdetails(this.makeupid).subscribe(data => this.makeupdetails=data 
     
      )
      console.log(this.makeupdetails)
  }

}
