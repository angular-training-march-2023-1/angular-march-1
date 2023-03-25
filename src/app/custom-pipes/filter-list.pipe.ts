import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student/student.model';

@Pipe({
  name: 'filterList',
  pure: false
})
export class FilterListPipe implements PipeTransform {

  transform(value: Student[], ...args: string[]): Student[] { 
    if(value.length==0 || args[0]=='') return value;
    return value.filter((eachStudent)=>eachStudent.studentGender.toLowerCase()==args[0].toLowerCase());
  }

}
