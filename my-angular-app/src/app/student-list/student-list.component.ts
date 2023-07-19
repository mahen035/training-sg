import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers:[StudentService]
})
export class StudentListComponent {

    selectedStudentCountRadioButton:string='ALL';
    students:any[]=[];

    constructor(private _studentService:StudentService){
     
    }

    ngOnInit(){
      this.students = this._studentService.getStudents();
      // this._studentService.getUsers().subscribe(response=>{
      //   this.students = response;
      //   console.log(this.students);
      // })
    }

    getTotalStudentsCount():number {
      return this.students.length;
    }
    getMaleStudentsCount():number{
      return this.students.filter(stud=>stud.Gender === 'Male').length;
    }
    getFemaleStudentsCount():number{
      return this.students.filter(stud=>stud.Gender === 'Female').length;
    }

    onStudentCountRadioButtonChange(selectedRadioButtonValue:string):void{
      //console.log(selectedRadioButtonValue)
      this.selectedStudentCountRadioButton = selectedRadioButtonValue;
    }
}
