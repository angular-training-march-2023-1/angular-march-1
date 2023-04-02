import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-view-http',
  templateUrl: './student-view-http.component.html',
  styleUrls: ['./student-view-http.component.css']
})
export class StudentViewHttpComponent implements OnInit {

  fetchedStudent: Student = {
    id: 0,
    studentName: '',
    studentTotalMarks: 0,
    studentDOB: new Date(),
    studentGender: ''
  }

  constructor(private activatedRoute: ActivatedRoute, 
              private studentHttpService: StudentHttpService,
              private router: Router) { }

  ngOnInit(): void {
    // 1. extract the route parameter sid from the route url
    //    for this we have to use ActivatedRoute, so lets inject it in the constructor
    let studentId = this.activatedRoute.snapshot.paramMap.get('sid');

    // 2. consume an endpoint of the backend application to fetch the student based on extracted studentId
    //    for this we have to use StudentHttpService
    if(studentId!=null){
      this.studentHttpService.getAStudent(+studentId).subscribe({
        next: (response)=>{
          // 3. once we have the response(student info) we have to render this info on the template
          this.fetchedStudent = response;
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }

  back(){
    // here we should route to student-list-http component
    this.router.navigate(['student-list-http']);
  }

}
