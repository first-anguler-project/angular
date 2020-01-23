import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
public url="https://localhost/4200/user/login";
  constructor(private http:HttpClient) { 
    
  }
  enroll(user:User) {
     return this.http.post<any>(this.url,user); } 
 
 
}
