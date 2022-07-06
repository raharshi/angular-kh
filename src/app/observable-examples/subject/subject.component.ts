import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ajax } from 'rxjs/ajax';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-subject',
  template: `
  <h1>{{message}}</h1>  
  <p>
      subject works!
    </p>

  `,
  styles: [
  ]
})
export class SubjectComponent implements OnInit {
  message!: string;

  constructor(private userService: UserService, private sharedService: SharedService) { }

  ngOnInit(): void {
    // this.testObs();
    // this.testSubject();
    // this.getUsers();
    // this.testBehaviorSub();
    // this.getUpdatedBS();
    // this.testReplaySubject();
    this.testAsyncSubject();
  }

  testObs() {
    const obs = new Observable(obs => obs.next(Math.random()));

    // subscriber 1
    obs.subscribe(data => console.log("Obs Subscriber 1: " + data));

    // subscriber 2
    obs.subscribe(data => console.log("Obs Subscriber 2: " + data));
  }

  testSubject() {
    const sub = new Subject();

    // subscriber 1
    sub.subscribe(data => console.log("Subject Subscriber 1: " + data));

    // subscriber 2
    sub.subscribe(data => console.log("Subject Subscriber 2: " + data));

    sub.next(Math.random());

  }

  getUsers() {
    const sub = new Subject();

    let data: any;

    data = ajax('https://jsonplaceholder.typicode.com/users');

    // subscriber 1
    sub.subscribe(d => {
      console.log(d);
    });

    // subscriber 2
    sub.subscribe(d => console.log(d));

    sub.next(data);

  }

  testBehaviorSub() {
    // subject
    const sub = new Subject();

    // subscriber 1
    sub.subscribe(data => console.log("Subject Subscriber 1: " + data));

    // subscriber 2
    sub.subscribe(data => console.log("Subject Subscriber 2: " + data));

    sub.next();

    // Behavior Subject

    const bSub = new BehaviorSubject<number>(10);

    // subscriber 1
    bSub.subscribe(data => console.log("BehaviorSubject Subscriber 1: " + data));

    // subscriber 2
    bSub.subscribe(data => console.log("BehaviorSubject Subscriber 2: " + data));

    bSub.next(2022);
  }

  getUpdatedBS() {
    this.sharedService.bSubject.subscribe(data => {
      this.message = data;
    })
  }

  testReplaySubject() {
    const replaySub = new ReplaySubject(2)

    replaySub.next(10);
    replaySub.next(20);
    replaySub.next(30);
    replaySub.next(40);

    // sub1
    replaySub.subscribe(d => console.log(d));

  }

  testAsyncSubject() {
    const asyncSub = new AsyncSubject();

    asyncSub.next(10);
    asyncSub.next(20);
    asyncSub.next(30);
    asyncSub.next(40);

    asyncSub.complete();

    // sub1
    asyncSub.subscribe(d => console.log(d));

    asyncSub.next(50);

    asyncSub.complete();
  }

}
