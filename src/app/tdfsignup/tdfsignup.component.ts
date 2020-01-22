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
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

 

  constructor(private enrollment:EnrollmentService) { }
userModel=new User("sh","is","","abnabil@iti.gov.eg",1234566,true);


onSubmit(){
  this._EnrollService.enroll(this.userModel).
   subscribe( response => console.log('Success!', response), error => console.log('error',error) ) } 
 
 


  


}
   