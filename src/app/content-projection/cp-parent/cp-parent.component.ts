import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp-parent',
  templateUrl: './cp-parent.component.html',
  styleUrls: ['./cp-parent.component.css']
})
export class CpParentComponent implements OnInit {

  constructor() { }
  clrs: string[] = [
    "red",
    "orange",
    "blue"
  ]

  cities: string[] = [
    "Newyork",
    "Denver",
    "Chicago"
  ]

  cuisines: string[] = [
    "Italian",
    "Chinese",
    "Albanian"
  ]

  ngOnInit(): void {
  }

}
