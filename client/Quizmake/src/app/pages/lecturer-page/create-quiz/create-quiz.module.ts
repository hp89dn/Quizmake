import { UploadTaskComponent } from './upload-task/upload-task.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateQuizRoutingModule } from "./create-quiz-routing.module";
import { CreateQuizComponent } from "./create-quiz.component";


import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { FormsModule } from "@angular/forms";

import { DropzoneDirective } from '../directives/dropzone.directive';


@NgModule({
  declarations: [DropzoneDirective, CreateQuizComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    CreateQuizRoutingModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatExpansionModule,
    CdkScrollableModule,
    FormsModule,
  ],
})
export class CreateQuizModule {}
