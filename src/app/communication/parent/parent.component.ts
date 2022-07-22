import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  topicName: string = "Angular Communication";
  childInput!: any;

  // @ViewChild('highlight') child!: ElementRef;
  @ViewChildren('highlight') children!: QueryList<ElementRef>;
  @ViewChild('child') childComponent!: ChildComponent;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // console.log(this.child.nativeElement.innerHTML);
    console.log(this.children);
    // this.children.first.nativeElement.style.color = 'red';
    // this.children.last.nativeElement.style.color = 'green';


    // Angular Foreach
    this.children.forEach((child, index) => {
      console.log("Index:" + index);

      // If Else Statement
      // if (index == 0){
      //   child.nativeElement.style.color = 'red';
      // }
      // else{
      //   child.nativeElement.style.color = 'green';
      // }

      // Angular switch
      switch (index) {
        case 0: {
          child.nativeElement.style.color = 'red';
          break;
        }
        case 1: {
          child.nativeElement.style.color = 'green';
          break;
        }
        case 2: {
          child.nativeElement.style.color = 'blue';
          break;
        }
      }
    });


    // child component code
    console.log(this.childComponent.test);

    // this.child.nativeElement.style.color = 'green';
  }

  getData(data: any) {
    this.childInput = data;
  }

  inc() {
    this.childComponent.increment();
  }

  dec() {
    this.childComponent.decrement();
  }


}
