import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:'studentLink',
    component:StudentComponent
  },
  {
    path:'studentlistLink',
    component:StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
