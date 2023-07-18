import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient){

  }

  private url = 'http://localhost:8484/home/users';

  getUsers(){
    return this.httpClient.get<any[]>(this.url);
  }
 
  getStudents():any[]{
    return[
      {
        ID:'101', FirstName:'Amit', LastName:'Sharan',
        DOB:'12/7/2001', Gender:'Male', CourseFee:3045.50
      },
      {
        ID:'102', FirstName:'Priya', LastName:'Nath',
        DOB:'12/7/2002', Gender:'Female', CourseFee:3000.50
      },
      {
        ID:'103', FirstName:'Kapil', LastName:'Dev',
        DOB:'08/4/2001', Gender:'Male', CourseFee:3045.50
      },
      {
        ID:'104', FirstName:'Rahul', LastName:'Sharan',
        DOB:'12/7/2001', Gender:'Male', CourseFee:3045.50
      },
      {
        ID:'105', FirstName:'Sneha', LastName:'Paul',
        DOB:'12/7/2001', Gender:'Female', CourseFee:3045.50
      }
    ]
  }
  
}
