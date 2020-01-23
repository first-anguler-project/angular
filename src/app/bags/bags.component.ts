import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
public bags;
  constructor(private getproduct:AllProductService) { }

  ngOnInit() {
    this.bags=this.getproduct.getproduct();
  }
  Wishlist(get){
    document.getElementById("mywishlist") 
   
  }
  
}
