import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  test: string = "From Child Comp";
  counter: number = 0;
  @Input('tName') childName!: string;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>()

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log("Topic Name is : " + this.childName);
  }

  sendData() {
    this.notify.emit("Angular Output Decorator from Child Component");
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
