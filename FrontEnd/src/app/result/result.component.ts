import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../Service/reports.service';
import { ReportOpertionsComponent } from '../report-opertions/report-opertions.component';
import { SnackbarService } from '../snackbar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reports } from '../model/Reports';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {


  results: Reports;
  resultList: Reports[] = [];


  constructor(private service: ReportsService) {
    this.results = new Reports;
    this.getResult();
  }

  getResult() {
    this.service.getAllReports().subscribe(results => this.resultList = results);
  }


}
