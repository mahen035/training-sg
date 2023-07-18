import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCountComponent } from './student-count.component';

describe('StudentCountComponent', () => {
  let component: StudentCountComponent;
  let fixture: ComponentFixture<StudentCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
