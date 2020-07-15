
import { Component, OnInit } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: "app-create-quiz",
  templateUrl: "./create-quiz.component.html",
  styleUrls: ["./create-quiz.component.scss"],
})
export class CreateQuizComponent implements OnInit {
  constructor() {}

  point: number;
  public question: string;
  public answerList: any[] = [
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    }
  ]

  quizList = [
    {
      point: '(1 pount)',
      question: '1+1 = ?',
      answerList: [
        {
          answer: 'A. 1'
        },
        {
          answer: 'B. 2'
        },
        {
          answer: 'C. 3'
        },
        {
          answer: 'D. 4'
        },
      ],
      correct: 'B. 2'
    },
    {
      point: '(1 pount)',
      question: '1+2 = ?',
      answerList: [
        {
          answer: 'A. 1'
        },
        {
          answer: 'B. 2'
        },
        {
          answer: 'C. 3'
        },
        {
          answer: 'D. 4'
        },
      ],
      correct: 'C. 3'
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.quizList, event.previousIndex, event.currentIndex);
  }

  addAnswerBox() {
    this.answerList.push({answer: ''});
  }
  removeQuizBox(index) {
    this.answerList.splice(index, 1);
  }

  ngOnInit() {

  }
}
