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
public url="../../assets/bags.json"
public api_url1="../../assets/makeup.json"
  public api_url = "../../assets/dress.json"
// public url="http://localhost:5000/bag/category";
 public url_bag_details ="http://localhost:5000/bag/details/" 
 public url_makeup_details ="http://localhost:5000/makeup/details/" 
 public url_dress_details ="http://localhost:5000/dress/details/" 
// public api_url1="http://localhost:5000/makeup/category"
//   public api_url = "http://localhost:5000/dress/category"
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

  getdressdetails(dress_id):Observable<Category[]>{
    return this.http.get<Category[]>(this.url_dress_details+dress_id )
  }

  getmakeup():Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url1)
  }

  getmakeupdetails(makeup_id):Observable<Category[]>{
    return this.http.get<Category[]>(this.url_makeup_details+makeup_id )
  }
}
