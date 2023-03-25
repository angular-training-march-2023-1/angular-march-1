import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  allNumbers: number[] = [3, 6, 2, 1, 9];

  constructor() { }

  ngOnInit(): void {
  }

}
