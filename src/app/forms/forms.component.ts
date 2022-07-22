import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user: any = {};
  constructor() { }

  ngOnInit(): void {
    this.user = { email: "rishi@angular.com", password: "rishi", address: "" }
    // this.user.email = "rishi@angular.com"
    // this.user.password = "rishi";
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  resetForm(form: NgForm) {
    console.log("Resetting my form...")
    form.reset({ email: "@gmail.com" });
  }

  errors: any = { 'required': 'false', minLength: 'false' }


}
