// import { TestBed } from '@angular/core/testing';
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
import { TopicOperationsComponent } from './topic-operations.component';





describe('Topic Insert Component Test', () => {




  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [TopicOperationsComponent],
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
 
  it('Insert Component Test', () => {
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const Customer = fixture.componentInstance;
    expect(Customer).toBeTruthy();
  });
 
  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#topicsForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(2);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#topicsForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
 
  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const topic = fixture.componentInstance;
    const topicFormGroup = topic.topicsForm;
    const topicFormValues = {
        topicId: '',
        topicName: ''
    }
    expect(topicFormGroup.value).toEqual(topicFormValues);
  });
 
  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const topic = fixture.componentInstance;
    topic.topicsForm.controls?.['topicId'].setValue("5");
    topic.topicsForm.controls?.['topicName'].setValue("JS");
    expect(topic.topicsForm.valid).toBeTruthy();
  });
  });

describe('Topic Update Component Test', () => {




beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TopicOperationsComponent],
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
  const fixture = TestBed.createComponent(TopicOperationsComponent);
  const Customer = fixture.componentInstance;
  expect(Customer).toBeTruthy();
});


it('Update Form Input GUI count', () => {
  const fixture = TestBed.createComponent(TopicOperationsComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#topicsForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(2);
});
it('Update Form Button GUI count', () => {
  const fixture = TestBed.createComponent(TopicOperationsComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#topicsForm");
  const inputElements = formElement.querySelectorAll("button");
  expect(inputElements.length).toEqual(2);
});


it('Update Form initial values', () => {
  const fixture = TestBed.createComponent(TopicOperationsComponent);
  const topic = fixture.componentInstance;
  const topicFormGroup = topic.topicsForm;
  const topicFormValues = {
      topicId: '',
      topicName: ''
  }
  expect(topicFormGroup.value).toEqual(topicFormValues);
});


it('Testing Form valid', () => {
  const fixture = TestBed.createComponent(TopicOperationsComponent);
  const topic = fixture.componentInstance;
  topic.topicsForm.controls?.['topicId'].setValue("3");
  topic.topicsForm.controls?.['topicName'].setValue("C PROGRAMMING");
  expect(topic.topicsForm.valid).toBeTruthy();
});
});


describe('Topic Delete Component Test', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicOperationsComponent],
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
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const topic = fixture.componentInstance;
    expect(topic).toBeTruthy();
  });


  it('Delete Form button GUI count', () => {
    const fixture = TestBed.createComponent(TopicOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#topicsForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
});
