import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SellerActivation } from 'oc-ng-common-service';


@Component({
  selector: 'oc-activation',
  templateUrl: './oc-activation.component.html',
  styleUrls: ['./oc-activation.component.scss']
})
export class OcActivationComponent implements OnInit {

  constructor() { }

  @Input() activationUrl;
  @Input() signupUrl;
  @Input() companyLogoUrl;
  @Input() process;
  @Input() activationModel = new SellerActivation();

  @Output() submit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  
  getValue(label: string) {
    return label;
  }

  submitForm(form) {
    if (!form.valid) {
      form.control.markAllAsTouched();
      this.submit.emit(false);
      return false;
    }
    this.submit.emit(true);  
    return false;    
  }
  onchange(form){
    if(form.form.controls.email.errors && form.form.controls.email.errors.serverErrorValidator){
      form.form.controls.email.setErrors(null);
    }
    if(form.form.controls.password.errors && form.form.controls.password.errors.serverErrorValidator){
      form.form.controls.password.setErrors(null);
    }
  }
}
