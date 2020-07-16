import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerPageRoutingModule } from './lecturer-page-routing.module';
import { LecturerPageComponent } from './lecturer-page.component';

import { DropzoneDirective } from './directives/dropzone.directive';

@NgModule({
  declarations: [LecturerPageComponent],
  imports: [
    CommonModule,
    LecturerPageRoutingModule,
   
  ]
})
export class LecturerPageModule { }
