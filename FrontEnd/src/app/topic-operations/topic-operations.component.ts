import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { TopicsService } from '../Service/topics.service';


@Component({
  selector: 'app-topic-operations',
  templateUrl: './topic-operations.component.html',
  styleUrl: './topic-operations.component.scss'
})
export class TopicOperationsComponent {

  topicsForm: FormGroup;
  constructor(private topic: TopicsService, private _dialogRef: MatDialogRef<TopicOperationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackbar: SnackbarService) {


    this.topicsForm = new FormGroup({
      topicId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      topicName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')])
    });
  }
  ngOnInit(): void {
    this.topicsForm.patchValue(this.data);
  }


  onSubmit() {

    if (this.topicsForm.valid) {
      if (this.data) {
        this.topic.updateTopic(this.data.id, this.topicsForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Topics are Updated", "Done")
            this._dialogRef.close(true);
          }
        })
      } else {
        this.topic.addTopic(this.topicsForm.value).subscribe({
          next: (_val) => {
            this._snackbar.openSnackBar("Topic Added", "Done")
            this._dialogRef.close(true);
          }
        });
      }

    }
  }
}

