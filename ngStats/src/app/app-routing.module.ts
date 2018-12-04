import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamSearchComponent } from './exam-search/exam-search.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExamSearchComponent
  },{
    path: 'question-page',
    component: QuestionPageComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
