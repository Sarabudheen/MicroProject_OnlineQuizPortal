import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../Service/user.service';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';
import { ScheduleService } from '../Service/schedule.service';
import { ScheduleOperationsComponent } from '../schedule-operations/schedule-operations.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {



  displayedColumns: string[] = ['testId', 'topicName', 'time', 'date', 'dificulty', 'action'];
  dataSource!: MatTableDataSource<any>


  constructor(private test: ScheduleService, private _dialog: MatDialog, private _snackbar: SnackbarService) { }


  ngOnInit(): void {
    this.getTest();
  }


  addTest() {
    const dialogRef = this._dialog.open(ScheduleOperationsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTest();
        }
      },
      error: console.log
    });
  }


  getTest() {
    this.test.getAllTests().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }


  deleteTest(id: number) {
    this.test.deleteTest(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Test Deleted", "Done");
        this.getTest();
      }
    });
  }


  updateSchedule(data: any) {
    const dialogRef = this._dialog.open(ScheduleOperationsComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTest();
        }
      },
      error: console.log
    });
  }

}
