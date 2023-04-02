import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-add-http',
  templateUrl: './student-add-http.component.html',
  styleUrls: ['./student-add-http.component.css']
})
export class StudentAddHttpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(myForm: any){
    console.log(myForm);

  }
}
