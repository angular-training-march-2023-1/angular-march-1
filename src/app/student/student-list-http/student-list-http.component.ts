import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
  filterData: string = '';

  allStudents: Student[] = [];

  constructor(private studentHttpService: StudentHttpService){}

  loadData(){
    this.studentHttpService.getAllStudents().subscribe({
      next: (response)=>{
        this.allStudents = response;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  deleteStudent(studId: number){
    this.studentHttpService.deleteStudent(studId).subscribe({
      next: (response)=>{
        this.loadData();
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }


  addTestStudent(){

  }
}
