import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerData } from '../customer-details/customer-interface';
import { CustomerService } from '../services/customer.service';
import { CustomValidators } from '../shared/validators/CustomValidator';



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signUpForm: FormGroup;
  passwordGroup : FormGroup;
  public isSubmit: boolean = false;
  apiReqest: CustomerData;
  constructor(private fb : FormBuilder, private route : Router, private custService : CustomerService) { }

  ngOnInit() {

    this.signUpForm = this.fb.group({ 
      emailId: new FormControl('', [  
        Validators.required,  
        Validators.minLength(8),  
        Validators.maxLength(30),
        Validators.email 
        //Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
         
      ],this.custService.emailExisted() ),
   
      passwordGroup: new FormGroup({

      password: new FormControl('', [  
        Validators.required,  
        Validators.minLength(8),  
        Validators.maxLength(15),  
        Validators.pattern("(?=(.*[A-Za-z0-9]){3})(?=(.*[A-Z]){3})(?=(.*[a-z]){3})(?=(.*[0-9]))(?=(.*[@#])).+")]),

      confirmPassword: new FormControl('', [  
        Validators.required,  
        Validators.minLength(8),  
        Validators.maxLength(15)  
       ])  
         
    } ,CustomValidators.PasswordsMatchCheck('password', 'confirmPassword'))
      // },CustomValidators.PasswordsMatch)
  });
  
  }
 
  get emailId(){
    return this.signUpForm.get('emailId');
  }
  get password(){
    return this.signUpForm.controls['passwordGroup'].get('password');
  }
  get confirmPassword(){
    return this.signUpForm.controls['passwordGroup'].get('confirmPassword');
  } 
  get PasswordsGroup(){
    return this.signUpForm.controls['passwordGroup'];
  } 
  // get fc(){
  //   return this.signUpForm.controls;
  // }
  // get pgC(){
  //   return this.passwordGroup.controls.;
  // }

  onSubmit(){    
   
      this.apiReqest = {
        emailId: this.emailId.value,
        password : this.password.value,
       
      }
       this.custService.saveCustomer(this.apiReqest).subscribe(
         (success)=> {
           if(success)
               this.route.navigate(['/login']);
           else 
              alert('Failed');
         },
         (error)=>{
           alert('Error');
         }       
        );      
        
        }

  disableSubmit(){    
   
      return this.signUpForm.valid;   

  }

  



}
