import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Users } from '../model/Users';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {



  displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'emailId', 'phoneNo', 'userName', 'userType', 'action'];
  dataSource!: MatTableDataSource<any>


  constructor(private user: UserService, private _dialog: MatDialog, private _snackbar: SnackbarService) { }


  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user.getAllUsers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }


  deleteUser(id: number) {
    this.user.deleteUsers(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Record Deleted", "Done");
      }
    });
  }


  updateUser(data: any) {
    const dialogRef = this._dialog.open(UserOperationsComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUser();
        }
      },
      error: console.log
    });
  }

}