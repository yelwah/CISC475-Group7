import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamSearchComponent } from './exam-search/exam-search.component';
import { QuestionSearchComponent} from './question-search/question-search.component';

const routes: Routes = [
  {
    path: 'exam-search',
    component: ExamSearchComponent
  },
  {
    path: 'question-search',
    component: QuestionSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
