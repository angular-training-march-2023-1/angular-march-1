import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  baseUrl: string = "http://localhost:3000/students";

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  getAStudent(studId: number): Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl+'/'+studId);
  }

  addStudent(){

  }

  updateStudent(){

  }

  deleteStudent(studId: number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId);
  }
}
