import { Injectable } from '@angular/core';
import { Student } from '../student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

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

  getAllStudents(): Student[]{
    return this.allStudents;
  }

}
