import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user-operations',
  templateUrl: './user-operations.component.html',
  styleUrl: './user-operations.component.scss'
})
export class UserOperationsComponent {


  userForm: FormGroup;
  constructor(private user: UserService, private _dialogRef: MatDialogRef<UserOperationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackbar: SnackbarService) {


    this.userForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      userType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
    });
  }
  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }


  onSubmit() {

    if (this.userForm.valid) {
      if (this.data) {
        this.user.updateUsers(this.data.id, this.userForm.value).subscribe({
          next: (val) => {
            this._snackbar.openSnackBar("User details Updated", "Done")
            this._dialogRef.close(true);
          }
        })
      }

    }
  }

}
