// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserOperationsComponent } from './user-operations.component';

// describe('UserOperationsComponent', () => {
//   let component: UserOperationsComponent;
//   let fixture: ComponentFixture<UserOperationsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [UserOperationsComponent]
//     })
//       .compileComponents();

//     fixture = TestBed.createComponent(UserOperationsComponent);
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
import {HttpClientModule} from '@angular/common/http'


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { UserOperationsComponent } from './user-operations.component';
import { Users } from '../model/Users';



describe('User Update Component Test', () => {




beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [UserOperationsComponent],
    imports:[
        BrowserModule,
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
      ],
      providers: [
       
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
       
      ]
    }).compileComponents();
});


it('Update Component Test', () => {
  const fixture = TestBed.createComponent(UserOperationsComponent);
  const user = fixture.componentInstance;
  expect(user).toBeTruthy();
});


it('Update Form Input GUI count', () => {
  const fixture = TestBed.createComponent(UserOperationsComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#userForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(7);
});
it('Update Form Button GUI count', () => {
  const fixture = TestBed.createComponent(UserOperationsComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#userForm");
  const inputElements = formElement.querySelectorAll("button");
  expect(inputElements.length).toEqual(2);
});


it('Update Form initial values', () => {
  const fixture = TestBed.createComponent(UserOperationsComponent);
  const user = fixture.componentInstance;
  const userFormGroup = user.userForm;
  const usersFormValues = {
      userId: '',
      firstName: '',  
      lastName: '',
      emailId: '',
      phoneNo:'',
      userName: '',
      userType: '',
      password:''
  }
  expect(userFormGroup.value).toEqual(usersFormValues);
});


it('Testing Form valid', () => {
  const fixture = TestBed.createComponent(UserOperationsComponent);
  const user = fixture.componentInstance;
  user.userForm.controls?.['userId'].setValue("121");
  user.userForm.controls?.['firstName'].setValue("Virat");
  user.userForm.controls?.['lastName'].setValue("Kohli");
  user.userForm.controls?.['emailId'].setValue("kohli@gamil.com");
  user.userForm.controls?.['phoneNo'].setValue("9009899877");
  user.userForm.controls?.['userName'].setValue("Sara");
  user.userForm.controls?.['userType'].setValue("Admin");
  user.userForm.controls?.['password'].setValue("11908");
  expect(user.userForm.valid).toBeTruthy();
});
});


describe('User Delete Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOperationsComponent],
      imports:[
        BrowserModule,
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
      ],
      providers: [
       
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
       
      ]
    }).compileComponents();
  });
 
  it('Delete Testing Component', () => {
    const fixture = TestBed.createComponent(UserOperationsComponent);
    const user = fixture.componentInstance;
    expect(user).toBeTruthy();
  });


  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(UserOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#userForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
});
