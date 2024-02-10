

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
import { TestBed } from '@angular/core/testing';
import { ReportOpertionsComponent } from './report-opertions.component';


describe('Report Insert Component Test', () => {

  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [ReportOpertionsComponent],
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
 
  it('Insert Testing Component', () => {
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const report = fixture.componentInstance;
    expect(report).toBeTruthy();
  });
 
  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#reportForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#reportForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
 
  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const report = fixture.componentInstance;
    const reportFormGroup = report.reportForm;
    const reportFormValues = {
        reportId: '',
        userId : '',
        topicName : '',
        score : '',
        feedBack : ''
    }
    expect(reportFormGroup.value).toEqual(reportFormValues);
  });
 
  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const report = fixture.componentInstance;
    report.reportForm.controls?.['reportId'].setValue("5");
    report.reportForm.controls?.['userId'].setValue("121");
    report.reportForm.controls?.['topicName'].setValue("Java");
    report.reportForm.controls?.['score'].setValue("100");
    report.reportForm.controls?.['feedBack'].setValue("Great Grade!!!");
    expect( report.reportForm.valid).toBeFalse();
  });
  });

describe('Schedule Update Component Test', () => {

beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ReportOpertionsComponent],
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




it('Update Testing Component', () => {
  const fixture = TestBed.createComponent(ReportOpertionsComponent);
  const report = fixture.componentInstance;
  expect(report).toBeTruthy();
});

it('Update Form Input GUI count', () => {
  const fixture = TestBed.createComponent(ReportOpertionsComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#reportForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(5);
});
it('Update Form Button GUI count', () => {
  const fixture = TestBed.createComponent(ReportOpertionsComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#reportForm");
  const inputElements = formElement.querySelectorAll("button");
  expect(inputElements.length).toEqual(2);
});

it('Update Form initial values', () => {
  const fixture = TestBed.createComponent(ReportOpertionsComponent);
  const report = fixture.componentInstance;
  const reportFormGroup = report.reportForm;
  const reportFormValues = {
      reportId: '',
      userId : '',
      topicName : '',
      score : '',
      feedBack : ''
  }
  expect(reportFormGroup.value).toEqual(reportFormValues);
});

it('Testing Form valid', () => {
  const fixture = TestBed.createComponent(ReportOpertionsComponent);
  const report = fixture.componentInstance;
  report.reportForm.controls?.['reportId'].setValue("5");
  report.reportForm.controls?.['userId'].setValue("121");
  report.reportForm.controls?.['topicName'].setValue("Java");
  report.reportForm.controls?.['score'].setValue("100");
  report.reportForm.controls?.['feedBack'].setValue("Great Grade!!!");
  expect( report.reportForm.valid).toBeFalse();
});
});


describe('Report Delete Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportOpertionsComponent],
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
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const report = fixture.componentInstance;
    expect(report).toBeTruthy();
  });


  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(ReportOpertionsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#reportForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
});
