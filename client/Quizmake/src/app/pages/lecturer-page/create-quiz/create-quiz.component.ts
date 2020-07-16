import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

// service
import { DocxReaderService } from './../services/docx-reader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-create-quiz",
  templateUrl: "./create-quiz.component.html",
  styleUrls: ["./create-quiz.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CreateQuizComponent implements OnInit {
  constructor(private DocxReaderService: DocxReaderService,private cdr: ChangeDetectorRef,) {}

  
  operationListSubcribe: Subscription;

  point: number;
  public question: string;
  public answerList: any[] = [
    '', '', '', ''
  ];

  quizList: any = [
    {
      point: "(1 pount)",
      question: "What is the scientific name of a butterfly?",
      answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      correct: "B. 2",
    },
    // {
    //   point: "(1 pount)",
    //   question: "How hot is the surface of the sun?",
    //   answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
    //   correct: "B. 2",
    // },
    // {
    //   point: "(1 pount)",
    //   question: "Who are the actors in The Internship?",
    //   answers: [
    //     "Ben Stiller, Jonah Hill",
    //     "Courteney Cox, Matt LeBlanc",
    //     "Kaley Cuoco, Jim Parsons",
    //     "Vince Vaughn, Owen Wilson",
    //   ],
    //   correct: "B. 2",
    // },
    // {
    //   point: "(1 pount)",
    //   question: "What is the capital of Spain?",
    //   answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
    //   correct: "C. 3",
    // },
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

  // uploader
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  getQuizData($event) {
    this.DocxReaderService.create({
      docxUrl: $event
    }).subscribe(( res : any) => {
      console.log(res);
      this.quizList = [...res];
    });
  }

  ngOnInit() {
    
  }
}
