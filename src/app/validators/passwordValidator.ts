import { AbstractControl } from '@angular/forms'

export const passwordValidator=(control:AbstractControl) =>
{
    const password=new String(control.value);
    const valid = password.length>6 ? true : false;
    return valid ? 
    { isValidPassword:{ valid:false, value:control.value } }
     : { isValidPassword:{ valid:true, value:control.value } }
}