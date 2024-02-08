import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReportsComponent } from './reports/reports.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { UserOperationsComponent } from './user-operations/user-operations.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';


import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TopicOperationsComponent } from './topic-operations/topic-operations.component';
import { QuestionOperationsComponent } from './question-operations/question-operations.component';
import { ReportOpertionsComponent } from './report-opertions/report-opertions.component';
import { TestComponent } from './test/test.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleOperationsComponent } from './schedule-operations/schedule-operations.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { ResultComponent } from './result/result.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    TopicsComponent,
    QuestionsComponent,
    ReportsComponent,
    AdminDashboardComponent,
    UsersComponent,
    UserOperationsComponent,
    TopicOperationsComponent,
    QuestionOperationsComponent,
    ReportOpertionsComponent,
    TestComponent,
    ScheduleComponent,
    ScheduleOperationsComponent,
    HomeComponent,
    SubmitComponent,
    ResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    MatGridListModule,
    MatRadioModule


  ],
  providers: [
    provideClientHydration(),
    UserService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
