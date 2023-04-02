import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private studentHttpService: StudentHttpService, private router: Router){}

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

  viewStudent(studId: number){
    // here we should navigate/route to student-view-http
    // for this we need Router API
    // so let us inject Router in the constructor

    this.router.navigate(['student-view-http', studId]); // here we are passing studId as a route parameter
                                                            // which will reach the routed component

  }

  addStudent(){
    // here we should navigate to student-add-http 
    this.router.navigate(['student-add-http']);
  }

  addTestStudent(){

  }
}
