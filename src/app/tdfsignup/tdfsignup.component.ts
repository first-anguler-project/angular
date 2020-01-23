import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from 'src/app/enrollment.service';


@Component({
  selector: 'app-tdfsignup',
  templateUrl: './tdfsignup.component.html',
  styleUrls: ['./tdfsignup.component.css']
})
export class TdfsignupComponent implements OnInit {
  public _EnrollService: any;
  ngOnInit() {
   
  }

 

  constructor(private enrollment:EnrollmentService) { }
userModel=new User("sh","is","","abnabil@iti.gov.eg",true);


onSubmit(){
  this.enrollment.enroll(this.userModel).
   subscribe( response => console.log('Success!', response), error => console.log('error',error) ) } 
 
 


  


}
   