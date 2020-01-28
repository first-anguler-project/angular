import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bags-category',
  templateUrl: './bags-category.component.html',
  styleUrls: ['./bags-category.component.css']
})
export class BagsCategoryComponent implements OnInit {
public bags=[];
public bagdetails=[];
  constructor(private getproduct:AllProductService,private router :Router) { }

  ngOnInit() {
    this.getproduct.getproduct().subscribe(data =>
      this.bags=data
    );
  }
  showdetails(bag){
  //  this.getproduct.getbagdetails().subscribe(data => this.bagdetails=data)
  this.router.navigate(["/bag",bag])
   
  }

}
