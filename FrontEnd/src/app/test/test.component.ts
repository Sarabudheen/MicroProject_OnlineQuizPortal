import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { QuestionsService } from '../Service/questions.service';
import { Quiz } from '../model/Questions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  questions: Quiz;
  result: string = " ";
  quizList: Quiz[] = [];

  constructor(private service: QuestionsService) {
    this.questions = new Quiz;
    this.getAllQuiestions();


  }
  getAllQuiestions() {
    this.service.getAllQuestions().subscribe(questions => this.quizList = questions);
  }

}
