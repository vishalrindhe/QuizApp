import { ResultComponent } from './pages/result/result.component';
import { QuestionListComponent } from './pages/question-list/question-list.component';
import { QuestionDisplayComponent } from './pages/question-display/question-display.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent},
  { path:'form', component:FormComponent },
  { path:'questionDisplay', component:QuestionDisplayComponent },
  { path:'questionList', component:QuestionListComponent },
  { path:'result', component:ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
