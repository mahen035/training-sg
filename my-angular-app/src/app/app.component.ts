import { Component } from '@angular/core';

//Decorator
@Component({   // Angular Component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
