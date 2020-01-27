import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';
import { Router } from '@angular/router';
import { GetBagsProductsService } from "src/services/get-bags-products.service";

@Component({
  selector: 'app-bags-category',
  templateUrl: './bags-category.component.html',
  styleUrls: ['./bags-category.component.css']
})
export class BagsCategoryComponent implements OnInit {
public bags=[];
  constructor(private getproduct:AllProductService,private router :Router) { }

  ngOnInit() {
    this.getproduct.getproduct().subscribe(data =>
      this.bags=data
    );
  }
  showdetails(detail){
this.router.navigate(["/details",detail.id])
   
  }

}
