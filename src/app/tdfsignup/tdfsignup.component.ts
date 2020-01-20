import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from 'src/app/enrollment.service';


@Component({
  selector: 'app-tdfsignup',
  templateUrl: './tdfsignup.component.html',
  styleUrls: ['./tdfsignup.component.css']
})
export class TdfsignupComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  _EnrollService: any;

  constructor(private enrollment:EnrollmentService) { }
userModel=new User('','1212',1212,true);


onSubmit(){
  this._EnrollService.enroll(this.userModel).
   subscribe( response => console.log('Success!', response), error => console.log('error',error) ) } 
 
 


  


}
   