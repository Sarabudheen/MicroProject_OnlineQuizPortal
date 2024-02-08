import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reports } from '../model/Reports';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private url: string = "http://localhost:9889/reports";


  constructor(private http: HttpClient) { }


  getAllReports(): Observable<any> {
    return this.http.get(this.url + "/getAllReportDetails");
  }


  deleteReport(id: number): Observable<any> {
    return this.http.delete(this.url + "/deleteReport/" + id);
  }
  updateReport(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/updateReport", data);
  }

  getReportById(id: number, data: any): Observable<any> {
    return this.http.get(this.url + "/getReportDetail/" + data);
  }

  addReport(data: any): Observable<any> {
    return this.http.post(this.url + "/addReport", data);
  }

}
