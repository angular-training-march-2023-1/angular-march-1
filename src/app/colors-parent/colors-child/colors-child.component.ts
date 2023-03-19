import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-colors-child',
  templateUrl: './colors-child.component.html',
  styleUrls: ['./colors-child.component.css']
})
export class ColorsChildComponent implements OnInit, OnChanges {

  @Input() printColor: string = '';
  @Output() deleteEventEmitter = new EventEmitter();

  constructor() {
    console.log("child constructor called...");
   }

  ngOnInit(): void {
    console.log("ngOnInit called...");    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called...");
  }
  
  deleteColor(color: string){
    // here we should not delete the color from the array - anyways we dont have the array here
    // the array is in the parent component
    // so we should emit the event to the parent component and 
    //the parent component should remove the color from the array

    // using deleteEventEmitter, emit the event to the parent component
    this.deleteEventEmitter.emit(color);
  }
}
