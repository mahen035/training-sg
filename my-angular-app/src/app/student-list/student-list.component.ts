import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
    students: any[] = [
      {
        ID:'101', FirstName:'Amit', LastName:'Sharan',
        DOB:'/12/7/2001', Gender:'Male', CourseFee:3045.50
      },
      {
        ID:'102', FirstName:'Priya', LastName:'Nath',
        DOB:'/12/7/2002', Gender:'Female', CourseFee:3000.50
      },
      {
        ID:'103', FirstName:'Kapil', LastName:'Dev',
        DOB:'/08/4/2001', Gender:'Male', CourseFee:3045.50
      },
      {
        ID:'104', FirstName:'Rahul', LastName:'Sharan',
        DOB:'/12/7/2001', Gender:'Male', CourseFee:3045.50
      }
    ]
}
