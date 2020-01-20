import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetBagsProductsService {

  constructor(private http:HttpClient) { }
}
