// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { RegisterComponent } from './register.component';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [RegisterComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { RegisterComponent } from './register.component';


describe('Register Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        MatCardModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });


  it('Register Component Test', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    expect(register).toBeTruthy();
  });


  it('Register Form Input GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });


  it('Register Form Button GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });


  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    const registerFormGroup = register.myForm;
    const registeFormValues = {
      
      firstName: '',
      lastName:'',
      emailId: '',
      phoneNo: '',
      userName:'',
      password:''
    }
    expect(registerFormGroup.value).toEqual(registeFormValues);
  });


  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    register.myForm.controls?.['firstName'].setValue("Sara");
    register.myForm.controls?.['lastName'].setValue("Ameer");
    register.myForm.controls?.['emailId'].setValue("sara@gmail.com");
    register.myForm.controls?.['phoneNo'].setValue("7010436645");
    register.myForm.controls?.['userName'].setValue("Sara");
    register.myForm.controls?.['password'].setValue("11957");
    expect(register.myForm.valid).toBeTruthy();
  });
});
