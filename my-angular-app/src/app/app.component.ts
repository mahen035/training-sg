import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Decorator
@Component({   // Angular Component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-angular-app';
  // isDisabled:boolean=true;
  // HackText:string="Hello <script>alert('Your application is hacked')</script>";
  // classToApply:string='boldClass colorClass';
  // Name:string = ''

  // onClick():void{
  //   console.log('Button is Clicked');
  // }
  
  constructor(private router:Router){}

  getStudent(){
    this.router.navigate(['/studentLink']);
  }

  getStudentList(){
    this.router.navigate(['/studentlistLink']);
  }
}

