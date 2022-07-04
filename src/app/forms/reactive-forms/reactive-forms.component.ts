import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.required)
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get city() {
    return this.loginForm.get('city');
  }

  get gender() {
    return this.loginForm.get('gender');
  }

  get terms() {
    return this.loginForm.get('terms');
  }

  get address() {
    return this.loginForm.get('address');
  }

  resetForm() {
    this.loginForm.reset();
    this.loginForm.patchValue({ email: 'test@gmail.com' });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
