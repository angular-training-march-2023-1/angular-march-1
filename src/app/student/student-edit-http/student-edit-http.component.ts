import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-edit-http',
  templateUrl: './student-edit-http.component.html',
  styleUrls: ['./student-edit-http.component.css']
})
export class StudentEditHttpComponent implements OnInit {

  // this FormGroup object has to be linked to the template's form
  // for this we will use formGroup and formControlName in the template
  myReactiveForm: FormGroup = new FormGroup({
    rsId: new FormControl(''),
    rsName: new FormControl('', [Validators.required, this.onlyText]),
    rsMark: new FormControl('', Validators.required),
    rsDob: new FormControl('', Validators.required),
    rsGender: new FormControl('')
  });

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
    //1. extract the sid from the route parameter
    let studentId = this.activatedRoute.snapshot.paramMap.get('sid');

    //2. fetch the student information of the extracted sid from the backend application
    if(studentId!=null){
      this.studentHttpService.getAStudent(+studentId).subscribe({
        next: (response)=>{
          this.fetchedStudent = response;
          //3. once we have the student information(response), assign this to the reactive form data/value
          this.myReactiveForm.setValue({
            rsId: this.fetchedStudent.id ,
            rsName: this.fetchedStudent.studentName,
            rsMark: this.fetchedStudent.studentTotalMarks,
            rsDob: this.fetchedStudent.studentDOB,
            rsGender: this.fetchedStudent.studentGender 
          })
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }

  editStudent(){
    console.log(this.myReactiveForm);

    // first we will construct a student object and assign the form data to it
    let updateStudent: Student = {
      id: this.myReactiveForm.value.rsId,
      studentName: this.myReactiveForm.value.rsName ,
      studentTotalMarks: this.myReactiveForm.value.rsMark,
      studentDOB: this.myReactiveForm.value.rsDob,
      studentGender: this.myReactiveForm.value.rsGender
    }
    
    // second send this student object to the backend application through the service class to get added to the database
    this.studentHttpService.updateStudent(updateStudent).subscribe({
      next: (response)=>{
        //once we receive the response(the response is of not much use here), we can navigate back to student-list-http
        this.router.navigate(['student-list-http']);
      },
      error: (err)=>{ console.log(err) }
    })
  }

  addAnotherValidator(){
    // here we are going to add another validator to rsName FormControl object
    this.myReactiveForm.get('rsName')?.addValidators(Validators.minLength(2));
    this.myReactiveForm.get('rsName')?.updateValueAndValidity();
  }

  // creating a custom validator function

  onlyText(control: FormControl){
    // here we will write logic for onlyText Validation
    if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value)){
      // this means the onlyText validator function is violated
      // so we should return ValidationError
      return ({ invalidText: true })
    }
    return null;
  }
}
