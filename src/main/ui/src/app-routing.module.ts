import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentSurvey} from "./app/student-survey/student-survey";
import {SimpleAcknowledgement} from "./app/simple-acknowledgement/simple-acknowledgement";
import {WinnerAcknowledgement} from "./app/winner-acknowledgement/winner-acknowledgement";
import {StudentInfo} from "./app/student-info/student-info";

const routes: Routes = [
  { path: 'survey', component: StudentSurvey },
  {path: '', pathMatch: 'full', redirectTo: 'survey'},
  { path: 'simple-acknowledgement', component: SimpleAcknowledgement },
  { path: 'winner-acknowledgement', component: WinnerAcknowledgement },
  { path: 'student-info/:id', component: StudentInfo },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }