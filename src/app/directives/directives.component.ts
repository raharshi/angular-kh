import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  colors: string[] = [
    'red',
    'orange',
    'blue'
  ]

  clr!: string;
  display: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.clr = color;
  }
}
