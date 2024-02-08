import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { ScheduleService } from '../Service/schedule.service';

@Component({
  selector: 'app-schedule-operations',
  templateUrl: './schedule-operations.component.html',
  styleUrl: './schedule-operations.component.scss'
})
export class ScheduleOperationsComponent {


  testForm: FormGroup;
  constructor(private test: ScheduleService, private _dialogRef: MatDialogRef<ScheduleOperationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackbar: SnackbarService) {


    this.testForm = new FormGroup({
      testId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      topicName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      time: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      dificulty: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.testForm.patchValue(this.data);
  }


  onSubmit() {

    if (this.testForm.valid) {
      if (this.data) {
        this.test.updateSchedule(this.data.id, this.testForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Schedule Updated", "Done")
            this._dialogRef.close(true);
          }
        })
      } else {
        this.test.addTest(this.testForm.value).subscribe({
          next: (_val) => {
            this._snackbar.openSnackBar("Test Added", "Done")
            this._dialogRef.close(true);
          }
        });
      }

    }
  }

}
