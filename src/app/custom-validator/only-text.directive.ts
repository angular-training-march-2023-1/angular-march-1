import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[onlyText]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OnlyTextDirective,
      multi: true
    }
  ]
})
export class OnlyTextDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // here we will write logic for onlyText Validation
    if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value)){
      // this means the onlyText validator function is violated
      // so we should return ValidationError
      return ({ invalidText: true })
    }
    return null;
  }
  

}
