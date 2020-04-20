import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUser } from './user/editUser/editUser.component';
import { TestListComponent } from './test/testList/testList.component';
import { UserComponent } from './home/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTestComponent } from './test/edit-test/edit-test.component';
import { QuestionsComponent } from './question/questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { EditQuestionsComponent } from './question/edit-questions/edit-questions.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    EditUser,
    TestListComponent,
    UserComponent,
    EditTestComponent,
    QuestionsComponent,
    AnswersComponent,
    EditQuestionsComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule ,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
