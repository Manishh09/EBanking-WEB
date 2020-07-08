import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerService } from '../services/customer.service';
import { CustomerData } from '../customer-details/customer-interface';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSignin: boolean;
  isShowPassword : boolean=false;
  apiReqest: CustomerData;
  cusotmerUId: string;
  constructor(private formBuilder: FormBuilder, private route: Router,
    private custService : CustomerService,
    private notifyserv: NotificationService) { }

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.email,
     
      //CustomEmailValidator.uniqueEmailId
      //Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ], this.custService.emailNotExisted()),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern("(?=(.*[A-Za-z0-9]){3})(?=(.*[A-Z]){3})(?=(.*[a-z]){3})(?=(.*[0-9]))(?=(.*[@#;])).+")])

  });
}  
  

  get password(){
    return this.loginForm.controls.password;
  }
  get email(){
    return this.loginForm.controls.email;
  }

  get emailIdExisted(){
    
    return this.custService.notExistingEmailIdValidator(this.loginForm.controls.email.value);   
    
  }

  onSignin(){
    
    this.apiReqest = {
      emailId: this.email.value,
      password : this.password.value,
     
    }
     this.custService.validateCredentials(this.apiReqest).subscribe(
       (success)=> {
         if(success){ 
              
              alert("Signin Successful");
              this.route.navigate(['/customer-details']);              
              this.sendNewUid(success);
            }
         else 
            alert('Invalid credentials or create an accountled');
       },
       (error)=>{
         alert('Error');
       }       
      );     

  }
  sendNewUid(uid : string){
     this.notifyserv.receiveCustomerUid(uid);
  }  
  
 

  onSignUp(){    
      this.route.navigate(['/signup']);
  }
  disableSignin(){
    return this.loginForm.valid;
  }
 

 

}
