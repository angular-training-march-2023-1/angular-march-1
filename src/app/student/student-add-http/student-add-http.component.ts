import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-add-http',
  templateUrl: './student-add-http.component.html',
  styleUrls: ['./student-add-http.component.css']
})
export class StudentAddHttpComponent implements OnInit {

  constructor(private studentHttpService: StudentHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  addStudent(myForm: any){
    console.log(myForm);

    // first we will construct a student object and assign the form data to it
    let newStudent: Student = {
      id: 0,
      studentName: myForm.value.studName ,
      studentTotalMarks: myForm.value.studMark,
      studentDOB: myForm.value.studDob,
      studentGender: myForm.value.studGender
    }
    
    // second send this student object to the backend application through the service class to get added to the database
    // this.studentHttpService.addStudent(newStudent).subscribe({
    //   next: (response)=>{
    //     //once we receive the response(the response is of not much use here), we can navigate back to student-list-http
    //     this.router.navigate(['student-list-http']);
    //   },
    //   error: (err)=>{ console.log(err) }
    // })

  }
}
