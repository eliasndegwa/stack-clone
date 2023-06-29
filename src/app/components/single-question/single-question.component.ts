import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/Interfaces';
import { QuestionService } from 'src/app/services/questionService/question.service';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  question!: Question
  constructor(private questionService: QuestionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuestion()
  }

  getQuestion(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam
      this.questionService.getQuestionById(id)
        .subscribe((question: Question | null) => {
          if (question !== null) {
            this.question = question;
          } else {
            console.log(Error);
          }
        })
    }
  }
}
