import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {Login} from './login';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
public url="http://localhost:5000/user/signup";
public url_login="http://localhost:5000/user/login";
  constructor(private http:HttpClient) { 
    
  }
  enroll(user:User) {
     return this.http.post(this.url,user);
     } 
    
 login(login:Login){
   return this.http.post(this.url_login,login)
 }
}
