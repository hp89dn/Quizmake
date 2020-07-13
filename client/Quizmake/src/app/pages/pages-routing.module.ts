import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'create-quiz',
        loadChildren: () => import('./create-quiz/create-quiz.module').then(m => m.CreateQuizModule)
      },
      {
        path: '',
        redirectTo: 'create-quiz',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'create-quiz',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
