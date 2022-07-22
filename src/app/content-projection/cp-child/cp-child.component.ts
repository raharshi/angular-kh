import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-cp-child',
  templateUrl: './cp-child.component.html',
  styleUrls: ['./cp-child.component.css']
})
export class CpChildComponent implements OnInit, AfterContentInit {

  constructor() { }

  @Input('colors') childColors!: string[];
  @ContentChild('head') head!: ElementRef;
  @ContentChild('foot') foot!: ElementRef;
  // @ContentChildren('head') heads!: QueryList<ElementRef>;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.head.nativeElement.style.color = 'red';
    this.foot.nativeElement.style.color = 'green';
    // this.heads.forEach((head) => {
    //   head.nativeElement.style.color = 'red'
    // })
  }

}
