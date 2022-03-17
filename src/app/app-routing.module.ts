import { ResultComponent } from './pages/result/result.component';
import { QuestionListComponent } from './pages/question-list/question-list.component';
import { QuestionDisplayComponent } from './pages/question-display/question-display.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard' , canActivate:[AuthGuard], component:DashboardComponent},
  { path:'form' , component:FormComponent },
  { path:'questionDisplay' , canActivate:[AuthGuard], component:QuestionDisplayComponent },
  { path:'questionList' , canActivate:[AuthGuard], component:QuestionListComponent },
  { path:'result' ,
  // loadChildren: () => import('./pages/result/result.module').then(mod => mod.ResultModule)  
  
  component:ResultComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
