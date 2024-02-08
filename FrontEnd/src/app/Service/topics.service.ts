import { Injectable } from '@angular/core';
import { Topics } from '../model/Topics';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private url: string = "http://localhost:9889/topics";

  constructor(private http: HttpClient) { }



  getAllTopics(): Observable<any> {
    return this.http.get(this.url + "/getAllTopics");
  }
  addTopic(data: any): Observable<any> {
    return this.http.post(this.url + "/addTopic", data);
  }

  deleteTopic(id: number): Observable<any> {
    return this.http.delete(this.url + "/deleteTopic/" + id);
  }
  updateTopic(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/updateTopic", data);
  }
}
