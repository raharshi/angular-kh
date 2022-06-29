import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `<h1> 
                Header 
              </h1>`,
  // styleUrls: ['./header.component.css']
  styles: ['h1{color:red}', 'h1{font-weight:300}']
})
export class HeaderComponent implements OnInit {

  // age!: number;
  name!: string;
  isValid!: boolean;

  age!: any;

  constructor() {
    console.log("this is header constructor");
  }

  ngOnInit(): void {
    console.log("this is header onInit");
    this.getHeader();
  }

  protected getHeader() {
    let age;
    const city = "Newyork";
    if (age == true) {
      let city = "";
    }

    this.age = "20";
    console.log("age is :" + this.age);
    this.age = 30;
    console.log("age is :" + this.age);
    // this.age = 20;
  }





}
