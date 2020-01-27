import { Component, OnInit } from '@angular/core';
import { Login} from 'src/app/login';
import { EnrollmentService } from 'src/app/enrollment.service';

@Component({
  selector: 'app-tdfform',
  templateUrl: './tdfform.component.html',
  styleUrls: ['./tdfform.component.css']
})
export class TdfformComponent implements OnInit {
  ngOnInit() {
   
  }
  public EnrollService: any;

  constructor(private enrollment:EnrollmentService) { }
 userModel=new Login("","");


onSubmit(){
  this.enrollment.login(this.userModel).
   subscribe( response => console.log('Success!', response), error => console.log('error',error) ) } 
 
 


  


}
   