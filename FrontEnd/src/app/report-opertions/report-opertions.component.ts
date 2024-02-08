import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../Service/user.service';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';
import { ReportsService } from '../Service/reports.service';

@Component({
  selector: 'app-report-opertions',
  templateUrl: './report-opertions.component.html',
  styleUrl: './report-opertions.component.scss'
})
export class ReportOpertionsComponent {


  reportForm: FormGroup;
  constructor(private report: ReportsService, private _dialogRef: MatDialogRef<ReportOpertionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackbar: SnackbarService) {


    this.reportForm = new FormGroup({
      reportId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      topicName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      score: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      feedBack: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    });
  }
  ngOnInit(): void {
    this.reportForm.patchValue(this.data); 
  }


  onSubmit() {

    if (this.reportForm.valid) {
      if (this.data) {
        this.report.updateReport(this.data.id, this.reportForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("Report details Updated", "Done")
            this._dialogRef.close(true);
          }
        })
      } else {
        this.report.addReport(this.reportForm.value).subscribe({
          next: (_val) => {
            this._snackbar.openSnackBar("Report Added", "Done")
            this._dialogRef.close(true);
          }
        });
      }


    }
  }

}
