import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { TopicsComponent } from './topics/topics.component';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { ResultComponent } from './result/result.component';




const routes: Routes = [ 
  {path :'Register',component:RegisterComponent},
  {path :'Login',component:LoginComponent},
  {path : 'UserDashboard',component:UserDashboardComponent},
  {path : 'AdminDashboard',component:AdminDashboardComponent},
  {path : 'Questions',component:QuestionsComponent},
  {path : 'Users',component:UsersComponent},
  {path : 'Topics',component:TopicsComponent},
  {path : 'Reports',component:ReportsComponent},
  {path : 'Schedule',component:ScheduleComponent},
  {path : 'Test',component:TestComponent},
  {path : '',component : HomeComponent},
  {path : 'Home',component : HomeComponent},
  {path : 'Submit',component : SubmitComponent},
  {path : 'Result',component:ResultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
