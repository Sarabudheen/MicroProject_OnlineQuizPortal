import { Component } from '@angular/core';
import { QuestionsService } from '../Service/questions.service';
import { Quiz } from '../model/Questions';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';
import { QuestionOperationsComponent } from '../question-operations/question-operations.component';
import { FileUploadService } from '../file-upload.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {


  displayedColumns: string[] = ['quizId', 'topicId', 'quiz', 'firstOption', 'secondOption', 'thirdOption', 'fourthOption', 'answer', 'action'];
  dataSource!: MatTableDataSource<any>

  selectedFile: File | undefined;

  constructor(private quiz: QuestionsService, private _dialog: MatDialog, private _snackbar: SnackbarService, private fileUploadService: FileUploadService) { }


  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz() {
    this.quiz.getAllQuestions().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }


  deleteQuiz(id: number) {
    this.quiz.deleteQuiz(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Record Deleted", "Done");
        this.getQuiz();
      }
    });
  }


  updateQuiz(data: any) {
    const dialogRef = this._dialog.open(QuestionOperationsComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getQuiz();
        }
      },
      error: console.log
    });
  }

  onUpload(): void {

    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(response => {
        console.log('File Uploaded Successfully : ', response);
      }, error => {
        console.log(error);
      }

      );
    }
  }

  fileSelect(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

}