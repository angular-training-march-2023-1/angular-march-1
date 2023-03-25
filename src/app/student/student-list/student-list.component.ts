import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filterData: string = '';

  allStudents: Student[] = [
    {
      id: 101,
      studentName: 'Ram Mohan',
      studentTotalMarks: 358,
      studentDOB: new Date(5,5,1990),
      studentGender: 'Male'
    },
    {
      id: 102,
      studentName: 'Nithya Mahadevan',
      studentTotalMarks: 240,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    },
    {
      id: 103,
      studentName: 'Rakesh Roy',
      studentTotalMarks: 427,
      studentDOB: new Date(2,2,1991),
      studentGender: 'Male'
    },
    {
      id: 104,
      studentName: 'Meena Kumari',
      studentTotalMarks: 353,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTestStudent(){
    let newStudent: Student = {
      id: 0,
      studentName: 'Test',
      studentTotalMarks: 353,
      studentDOB: new Date(7,7,1992),
      studentGender: 'Female'
    }

    this.allStudents.push(newStudent);
  }
}
