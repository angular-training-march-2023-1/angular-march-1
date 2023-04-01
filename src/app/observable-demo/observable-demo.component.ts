import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  allColors: string[] = ["RED", "BLUE", "GREEN", "BROWN"];

  // myObservable: Observable<string> = new Observable((observer)=>{
  //   console.log("streaming/emitting started...")
  //   observer.next("A");
  //   observer.next("B");
  //   observer.next("C");
  //   observer.error(new Error("Something went wrong!"));
  //   observer.next("D");
  //   observer.next("E");
  //   observer.complete();
  // });


  //myObservable: Observable<any> = of(25, 'hello', true, 10);

  //myObservable: Observable<any> = of(25, 'hello', this.allColors, true, 10);

  //myObservable: Observable<string> = from(this.allColors);

  //myObservable: Observable<string> = from(this.allColors).pipe<string>(map((eachColor)=>eachColor.toLowerCase()));

  myObservable: Observable<string> = from(this.allColors).pipe<string>(filter((eachColor)=>eachColor.startsWith("B")));


  constructor() { }

  ngOnInit(): void {
  }

  startSubscription(){
    this.myObservable.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log("streaming/emitting completed...")
      }
    });

  }
}
