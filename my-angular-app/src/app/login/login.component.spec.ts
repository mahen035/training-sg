import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('H1 tag has text Hello World', ()=>{
    var header: HTMLElement = fixture.nativeElement.querySelector("h1")
    expect(header.textContent).toEqual("Hello World");
  })

  it('alt tag has text Login Image', ()=>{
    var img: HTMLElement = fixture.nativeElement.querySelector("img")
    expect(img.getAttribute("alt")).toEqual("Login Image");
  })

  it("Total Should be Two", ()=>{
     component.total = 0;
     component.add();
     component.add();
     expect(component.total).toEqual(2)
  })


});
