import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface DialogData {
  question: string,
  answer1: string,
  answer2: string,
  answer3: string,
  answer4: string
}

@Component({
  selector: "app-add-quiz-dialog",
  templateUrl: "./add-quiz-dialog.component.html",
  styleUrls: ["./add-quiz-dialog.component.scss"],
})
export class AddQuizDialogComponent implements OnInit {
 
  constructor(
  ) {}

  ngOnInit(): void {}
}
