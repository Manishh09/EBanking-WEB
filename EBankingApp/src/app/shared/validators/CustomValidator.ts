import { FormGroup, ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from 'src/app/services/customer.service';
import { OnInit } from '@angular/core';




export class CustomValidators{
 

    // static PasswordsMatch(control: AbstractControl) {

    //     const pwd = control.get('password');
    //     const confPwd = control.get('confirmPassword');

    //     if (pwd.value !== confPwd.value)
    //            return {'passwordsMatch' : true};
    //         return null;
    // }
    constructor(){}

    static PasswordsMatchCheck(passwd: string, confirmPasswd: string) {

        return (fg: FormGroup) => {

            const pwd = fg.controls[passwd];
            const confpwd = fg.controls[confirmPasswd];

            //if( (pwd.value as string).length == (confpwd.value as string).length &&    pwd.value !== confpwd.value)
            //return confpwd.setErrors({'passwordsMatch' : true});
            if ((pwd.value as string).length == (confpwd.value as string).length && pwd.value !== confpwd.value)
                return { 'passwordsMatch': true };

            return null;
        }

    }
}
     






    
