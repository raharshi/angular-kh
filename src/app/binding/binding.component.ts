import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = "Data Binding";
  test1 = "Interpolation Test";
  imgLoc = "assets/hotel4.jpg";
  name = "angular";
  disableBtn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    const object = { title: "title", name: "name" };
    object.title = "angular";
    // object={title:"angular"};

    if (this.title != null && this.title != undefined) {
      console.log(this.title);
    }
    this.title = "Data Binding in Angular"
  }
}
