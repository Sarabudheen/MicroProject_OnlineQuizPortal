import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../Service/user.service';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';
import { QuestionsService } from '../Service/questions.service';

@Component({
  selector: 'app-question-operations',
  templateUrl: './question-operations.component.html',
  styleUrl: './question-operations.component.scss'
})
export class QuestionOperationsComponent {


  quizForm: FormGroup;
  constructor(private quiz: QuestionsService, private _dialogRef: MatDialogRef<QuestionOperationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackbar: SnackbarService) {


    this.quizForm = new FormGroup({
      quizId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      topicId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      quiz: new FormControl('', [Validators.required]),
      firstOption: new FormControl('', [Validators.required]),
      secondOption: new FormControl('', [Validators.required]),
      thirdOption: new FormControl('', [Validators.required]),
      fourthOption: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.quizForm.patchValue(this.data); //To view the existing data when click update
  }


  onSubmit() {

    if (this.quizForm.valid) {
      if (this.data) {// Update Vehicle
        this.quiz.updateQuiz(this.data.id, this.quizForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Question Updated", "Done")
            this._dialogRef.close(true);
          }
        })
      }

    }
  }
}
