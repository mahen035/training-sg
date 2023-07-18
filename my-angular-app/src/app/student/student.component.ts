import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
    Name:string = 'David'
    Branch:string='CSE'
    Mobile:number=3827484923
    Gender:string='Male'
    Age:number=22
    FontSize:number=40

    ShowDetails:boolean = false;

    ToggleDetails():void {
      this.ShowDetails = !this.ShowDetails;
    }

    getStudentDetail():string{
      return this.Name+' '+this.Branch+' '+this.Age;
    }

    AddCSSStyles(){
      let CssStyles = {
        'font-weight':'bold',
        'font-style':'italic',
        'font-size.px':32
      }
      return CssStyles;
    }
}

// DATA BINDING: one Way data binding
//                component to view => String Interpolation, Style binding, Class binding, Property binding, Attribute binding
//                View to Component => Event Binding

//              Two way data binding [{ngModel}]

// Create an employee component with fields like empName, empAge, empSalary
// you should display employee details in tabular for alongwith eligible bonus (30% of total salary)
