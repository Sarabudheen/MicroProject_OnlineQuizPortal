import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/Questions';
import { Topics } from '../model/Topics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private url: string = "http://localhost:9889/quiz";
  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<any> {
    return this.http.get(this.url + "/getAllQuizzes");
  }


  deleteQuiz(id: number): Observable<any> {
    return this.http.delete(this.url + "/deleteQuiz/" + id);
  }
  updateQuiz(id: number, data: any): Observable<any> {
    return this.http.put(this.url + "/updateQuiz", data);
  }



}
