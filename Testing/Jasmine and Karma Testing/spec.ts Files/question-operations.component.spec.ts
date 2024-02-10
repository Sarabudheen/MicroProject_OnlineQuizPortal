// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { QuestionOperationsComponent } from './question-operations.component';

// describe('QuestionOperationsComponent', () => {
//   let component: QuestionOperationsComponent;
//   let fixture: ComponentFixture<QuestionOperationsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [QuestionOperationsComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(QuestionOperationsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

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
import { QuestionOperationsComponent } from './question-operations.component';



describe('Test Insert Component Test', () => {




  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [QuestionOperationsComponent],
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
    const fixture = TestBed.createComponent(QuestionOperationsComponent);
    const quiz = fixture.componentInstance;
    expect(quiz).toBeTruthy();
  });
 
  it('Insert Form Input GUI count', () => {
    const fixture = TestBed.createComponent(QuestionOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#quizForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(8);
  });
  it('Insert Form Button GUI count', () => {
    const fixture = TestBed.createComponent(QuestionOperationsComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#quizForm");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(2);
  });
 
  it('Insert Form initial values', () => {
    const fixture = TestBed.createComponent(QuestionOperationsComponent);
    const quiz = fixture.componentInstance;
    const quizFormGroup = quiz.quizForm;
    const quizFormValues = {
        quizId: '',
        topicId : '',
        quiz : '',
        firstOption : '',
        secondOption : '',
        thirdOption : '',
        fourthOption : '',
        answer : ''
    }
    expect(quizFormGroup.value).toEqual(quizFormValues);
  });
 
  it('Testing Form valid', () => {
    const fixture = TestBed.createComponent(QuestionOperationsComponent);
    const quiz = fixture.componentInstance;
    quiz.quizForm.controls?.['quizId'].setValue("6");
    quiz.quizForm.controls?.['topicId'].setValue("1");
    quiz.quizForm.controls?.['quiz'].setValue("What was the original name for Java?");
    quiz.quizForm.controls?.['firstOption'].setValue(" C++++");
    quiz.quizForm.controls?.['secondOption'].setValue("Oak");
    quiz.quizForm.controls?.['thirdOption'].setValue("Pine");
    quiz.quizForm.controls?.['fourthOption'].setValue("Maple");
    quiz.quizForm.controls?.['answer'].setValue("Oak");
    expect( quiz.quizForm.valid).toBeTruthy();
  });
  });

  describe('Quiz Update Component Test', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [QuestionOperationsComponent],
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
      const fixture = TestBed.createComponent(QuestionOperationsComponent);
      const quiz = fixture.componentInstance;
      expect(quiz).toBeTruthy();
    });
   
    it('Update Form Input GUI count', () => {
      const fixture = TestBed.createComponent(QuestionOperationsComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#quizForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(8);
    });
    it('Update Form Button GUI count', () => {
      const fixture = TestBed.createComponent(QuestionOperationsComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#quizForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(2);
    });
   
    it('Update Form initial values', () => {
      const fixture = TestBed.createComponent(QuestionOperationsComponent);
      const quiz = fixture.componentInstance;
      const quizFormGroup = quiz.quizForm;
      const quizFormValues = {
          quizId: '',
          topicId : '',
          quiz : '',
          firstOption : '',
          secondOption : '',
          thirdOption : '',
          fourthOption : '',
          answer : ''
      }
      expect(quizFormGroup.value).toEqual(quizFormValues);
    });
   
    it('Testing Form valid', () => {
      const fixture = TestBed.createComponent(QuestionOperationsComponent);
      const quiz = fixture.componentInstance;
      quiz.quizForm.controls?.['quizId'].setValue("6");
      quiz.quizForm.controls?.['topicId'].setValue("1");
      quiz.quizForm.controls?.['quiz'].setValue("What was the original name for Java?");
      quiz.quizForm.controls?.['firstOption'].setValue(" C++++");
      quiz.quizForm.controls?.['secondOption'].setValue("Oak");
      quiz.quizForm.controls?.['thirdOption'].setValue("Pine");
      quiz.quizForm.controls?.['fourthOption'].setValue("Maple");
      quiz.quizForm.controls?.['answer'].setValue("Oak");
      expect( quiz.quizForm.valid).toBeTruthy();
    });
    });

    describe('Report Delete Component Test', () => {


      beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [QuestionOperationsComponent],
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
        const fixture = TestBed.createComponent(QuestionOperationsComponent);
        const report = fixture.componentInstance;
        expect(report).toBeTruthy();
      });
    
    
      it('Delete Form button GUI count', () => {
        const fixture = TestBed.createComponent(QuestionOperationsComponent);
        const formElement = fixture.debugElement.nativeElement.querySelector("#quizForm");
        const inputElements = formElement.querySelectorAll("button");
        expect(inputElements.length).toEqual(2);
      });
    });