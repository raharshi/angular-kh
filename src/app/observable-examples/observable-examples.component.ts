import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-observable-examples',
  templateUrl: './observable-examples.component.html',
  styleUrls: ['./observable-examples.component.css']
})
export class ObservableExamplesComponent implements OnInit {

  subscription!: Subscription;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    // this.testPromise();
    // this.testObs();
  }

  testPromise() {
    const prom = new Promise(resolve => {
      console.log("Promise is Calling...");
      setTimeout(() => {
        resolve("Promise");
        resolve("Promise1");
        resolve("Promise2");
      }, 1000)
    });

    prom.then(data => {
      console.log(data);
    })
  }

  testObs() {
    // const obs = new Observable(obs => {
    //   console.log("Observable is Calling...");
    //   setTimeout(() => {
    //     obs.next("Observable");
    //     obs.next("Observable1");
    //     obs.next("Observable2");
    //   }, 1000);
    // });

    // obs.pipe(filter(d => d == "Observable1")).subscribe(data => {
    //   console.log(data);
    // });

    let counter = 0;
    const obs = new Observable(obs => {
      console.log("Observable is Calling...");
      setInterval(() => {
        counter++;
        obs.next(counter);
      }, 1000)
    })

    this.subscription = obs.subscribe(data => {
      console.log(data);
    });
  }

  unSubscribe() {
    this.subscription.unsubscribe();
  }

  updateBS() {
    this.sharedService.updateBS('Behavior Subject is Updated');
  }
}
