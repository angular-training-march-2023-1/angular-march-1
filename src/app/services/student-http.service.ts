import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student/student.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  baseUrl: string = "http://localhost:3000/students";

  newHeader: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer '+this.authService.fetchToken().token);
  
  constructor(private httpClient: HttpClient, private authService:AuthService) { }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseUrl, { headers: this.newHeader });
  }

  getAStudent(studId: number): Observable<Student>{
    return this.httpClient.get<Student>(this.baseUrl+'/'+studId, { headers: this.newHeader });
  }

  addStudent(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(this.baseUrl, student, { headers: this.newHeader });
  }

  updateStudent(student: Student): Observable<Student>{
    return this.httpClient.put<Student>(this.baseUrl+'/'+student.id, student, { headers: this.newHeader });
  }

  deleteStudent(studId: number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId, { headers: this.newHeader });
  }
}
