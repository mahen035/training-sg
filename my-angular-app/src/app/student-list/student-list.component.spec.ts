import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponent } from './student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentCountComponent } from '../student-count/student-count.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListComponent, StudentCountComponent ],
      imports: [HttpClientModule, FormsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the child component', ()=>{
    const{ debugElement } = fixture;
    var countComponent = debugElement.query(By.css('app-student-count'));
    expect(countComponent).toBeTruthy();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Total female students should be 2', ()=>{
    var fStud:number = component.getFemaleStudentsCount();
    expect(fStud).toEqual(2)
  })
});
