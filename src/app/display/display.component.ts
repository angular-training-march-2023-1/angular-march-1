import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  myMovie = "Avengers: Age of Ultron";

  constructor() { }

  ngOnInit(): void {
  }

  changeMovie(){
    this.myMovie = "Harry Potter and the Order of Phoenix";
  }

}
