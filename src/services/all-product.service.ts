import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from 'src/app/interfaces/productdetails';
@Injectable({
  providedIn: 'root'
})
export class AllProductService {
public url="http://localhost:4200/get/getproduct"
  constructor(private http:HttpClient) { 
   
  }
  getproduct():Observable<product[]>{
    return this.http.get<product[]>(this.url)
  }
}
