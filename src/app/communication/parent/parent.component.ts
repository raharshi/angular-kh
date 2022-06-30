import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  topicName: string = "Angular Communication"
  childInput!: any;
  constructor() { }

  ngOnInit(): void {
  }

  getData(data: any) {
    this.childInput = data;
  }


}
