// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ScheduleOperationsComponent } from './schedule-operations.component';

// describe('ScheduleOperationsComponent', () => {
//   let component: ScheduleOperationsComponent;
//   let fixture: ComponentFixture<ScheduleOperationsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ScheduleOperationsComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ScheduleOperationsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TestBed } from '@angular/core/testing';
import { ScheduleOperationsComponent } from './schedule-operations.component';


describe('Test Insert Component Test', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleOperationsComponent],
      imports: [
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

  it('Insert Component Test', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    expect(test).toBeTruthy();
  });

  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#testForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(4);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#testForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });

  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    const testFormGroup = test.testForm;
    const testFormValues = {
      testId: '',
      topicName: '',
      time: '',
      date: '',
      dificulty: ''
    }
    expect(testFormGroup.value).toEqual(testFormValues);
  });

  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    test.testForm.controls?.['testId'].setValue("2");
    test.testForm.controls?.['topicName'].setValue("JAVA");
    test.testForm.controls?.['time'].setValue("11:00:00");
    test.testForm.controls?.['date'].setValue("2024-02-10");
    test.testForm.controls?.['dificulty'].setValue("Easy");
    expect(test.testForm.valid).toBeTruthy();
  });
});

describe('Schedule Update Component Test', () => {




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleOperationsComponent],
      imports: [
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
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    expect(test).toBeTruthy();
  });


  it('Update Form Input GUI count', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#testForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(4);
  });
  it('Update Form Button GUI count', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#testForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });


  it('Update Form initial values', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    const testFormGroup = test.testForm;
    const testFormValues = {
      testId: '',
      topicName: '',
      time: '',
      date: '',
      dificulty: ''
    }
    expect(testFormGroup.value).toEqual(testFormValues);
  });


  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    test.testForm.controls?.['testId'].setValue("2");
    test.testForm.controls?.['topicName'].setValue("JAVA");
    test.testForm.controls?.['time'].setValue("11:30:00");
    test.testForm.controls?.['date'].setValue("2024-02-10");
    test.testForm.controls?.['dificulty'].setValue("Medium");
    expect(test.testForm.valid).toBeTruthy();
  });
});


describe('Test Delete Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleOperationsComponent],
      imports: [
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
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const test = fixture.componentInstance;
    expect(test).toBeTruthy();
  });


  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(ScheduleOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#testForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
});
