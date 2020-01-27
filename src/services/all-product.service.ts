import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { bag } from 'src/app/interfaces/productdetails';
@Injectable({
  providedIn: 'root'
})
export class AllProductService {
public url="http://localhost:5000/bag/category"
  constructor(private http:HttpClient) { 
   
  }
  getproduct():Observable<bag[]>{
    return this.http.get<bag[]>(this.url)
  }
}
