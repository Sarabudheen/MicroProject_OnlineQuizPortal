import { Component } from '@angular/core';
import { ReportsService } from '../Service/reports.service';
import { Reports } from '../model/Reports';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from '../snackbar.service';
import { UserOperationsComponent } from '../user-operations/user-operations.component';
import { ReportOpertionsComponent } from '../report-opertions/report-opertions.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  displayedColumns: string[] = ['reportId', 'userId', 'topicName', 'score', 'feedBack', 'action'];
  dataSource!: MatTableDataSource<any>


  constructor(private report: ReportsService, private _dialog: MatDialog, private _snackbar: SnackbarService) {
    this.getReport();
  }


  ngOnInit(): void {
    this.getReport();
  }


  addReport() {
    const dialogRef = this._dialog.open(ReportOpertionsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getReport();
        }
      },
      error: console.log
    });
  }


  getReport() {
    this.report.getAllReports().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      }
    });
  }


  deleteReport(id: number) {
    this.report.deleteReport(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar("Record Deleted", "Done");
        this.getReport();
      }
    });
  }


  updateReport(data: any) {
    const dialogRef = this._dialog.open(ReportOpertionsComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getReport();
        }
      },
      error: console.log
    });
  }


}


