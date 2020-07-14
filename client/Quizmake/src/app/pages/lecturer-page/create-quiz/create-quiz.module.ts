import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateQuizRoutingModule } from "./create-quiz-routing.module";
import { CreateQuizComponent } from "./create-quiz.component";
import { AddQuizDialogComponent } from "./add-quiz-dialog/add-quiz-dialog.component";


import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [CreateQuizComponent, AddQuizDialogComponent],
  imports: [
    CommonModule,
    CreateQuizRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
  ],
})
export class CreateQuizModule {}
