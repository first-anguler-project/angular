import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
public bagdetails;
public bagid={};
  constructor(private getproduct:AllProductService, private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.paramMap.subscribe((param:ParamMap)=>{
      this.bagid=param.get("_id")
    })
     this.getproduct.getbagdetails(this.bagid).subscribe(data => this.bagdetails=data 
     
      )
      console.log(this.bagdetails)
    }
  }
  
   
  
  // Wishlist(get){
  //   document.getElementById("mywishlist") 
   
  // }
  

