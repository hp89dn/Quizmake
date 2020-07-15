import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

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
    '', '', '', ''
  ];

  quizList = [
    {
      point: "(1 pount)",
      question: "What is the scientific name of a butterfly?",
      answerList: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      correct: "B. 2",
    },
    {
      point: "(1 pount)",
      question: "How hot is the surface of the sun?",
      answerList: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
      correct: "B. 2",
    },
    {
      point: "(1 pount)",
      question: "Who are the actors in The Internship?",
      answerList: [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson",
      ],
      correct: "B. 2",
    },
    {
      point: "(1 pount)",
      question: "What is the capital of Spain?",
      answerList: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
      correct: "C. 3",
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.quizList, event.previousIndex, event.currentIndex);
  }

  addAnswerBox() {
    this.answerList.push("");
  }
  removeAnswerBox(index) {
    this.answerList.splice(index, 1);
  }
  removeQuizBox(index) {
    this.quizList.splice(index, 1);
  }

  ngOnInit() {}
}
