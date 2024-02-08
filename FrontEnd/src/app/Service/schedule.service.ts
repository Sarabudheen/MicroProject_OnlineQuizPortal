import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private url: string = "http://localhost:9889/schedule";

  constructor(private http: HttpClient) { }

  getAllTests(): Observable<any> {
    return this.http.get(this.url + "/getAllTest");
  }

  deleteTest(id: number): Observable<any> {
    return this.http.delete(this.url + "/deleteTest/" + id);
  }
  updateSchedule(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/updateSchedule", data);
  }
  addTest(data: any): Observable<any> {
    return this.http.post(this.url + "/addTest", data);
  }
}
