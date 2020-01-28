import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { bag } from 'src/app/interfaces/productdetails';
import { Category } from "src/app/interfaces/Category";
import { BagsCategoryComponent } from 'src/app/bags-category/bags-category.component';
@Injectable({
  providedIn: 'root'
})
export class AllProductService {
public url="http://localhost:5000/bag/category";
public url_bag_details ="http://localhost:5000/bag/details/" 
public api_url1="../../assets/makeup.json"
  public api_url = "../../assets/dress.json"
  constructor(private http:HttpClient) { 
   
  }
  getproduct():Observable<bag[]>{
    return this.http.get<bag[]>(this.url)
 
  }
  getbagdetails(bag_id):Observable<bag[]>{
    return this.http.get<bag[]>(this.url_bag_details+bag_id )
  }

  // getproduct():Observable<product[]>{
  //   return this.http.get<product[]>(this.api_url)
  // }

  getdress():Observable<Category[]>
  {

    return this.http.get<Category[]>(this.api_url)
  }
  getmakeup():Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url1)
  }
}
