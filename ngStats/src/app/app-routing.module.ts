import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamSearchComponent } from './exam-search/exam-search.component';

const routes: Routes = [
  {
    path: '',
    component: ExamSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
