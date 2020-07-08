import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EbankApiService } from '../core/services/ebank-api.service';
import { CustomerData } from '../customer-details/customer-interface';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable,  BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService { 
  
  isLoggedInUser: boolean;
  constructor(private ebankApi: EbankApiService) { } 

   emailExisted() :AsyncValidatorFn{
    return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
                    return this.notExistingEmailIdValidator(control.value).pipe(
                    map(result =>{
                            return  result ? { errorMsg: true} : null;
                    })
                  );
    }
  }

  emailNotExisted() :AsyncValidatorFn{
    return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
                    return this.notExistingEmailIdValidator(control.value).pipe(
                    map(result =>{
                            return  !result ? { errorMessg: true} : null;
                    })
                  );
    }
  }

  notExistingEmailIdValidator(emailid: string){
    return this.ebankApi.get('/Customer/ValidateNotExistingEmailId/'+ emailid);
  }

  saveCustomer(data : CustomerData){
    return this.ebankApi.post('/Customer/Save' , data);
  }
 
  validateCredentials(data : CustomerData){
    this.isLoggedInUser=true;
    return this.ebankApi.post('/Customer/ValidateCredentials',data);
  }
  
  isLoggedIn(){
     return this.isLoggedInUser;
  }

}
