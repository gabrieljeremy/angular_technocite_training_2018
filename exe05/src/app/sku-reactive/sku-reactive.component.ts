import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-sku-reactive',
  templateUrl: './sku-reactive.component.html',
  styleUrls: ['./sku-reactive.component.scss']
})
export class SkuReactiveComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl; // controller qui gère toutes les sortes d'input
  email: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku : ['ABC', Validators.required],
      email : ['', [Validators.required, Validators.email]]
    });
    this.sku = this.myForm.controls['sku'];
    this.email = this.myForm.controls['email'];
  }
  onSubmit(form: any) { // any : accepte tout type de variable
    // console.log(this.sku.valid);
    // console.log(this.email.errors);
    // console.log(this.email.hasError('email'));
    // console.log(this.myForm.valid);
    console.log(form);
  }
  ngOnInit() {
  }

}
