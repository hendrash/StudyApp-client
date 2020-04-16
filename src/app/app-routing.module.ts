import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUser } from './user/editUser/editUser.component';
import { TestListComponent } from './test/testList/testList.component';
import { AppComponent } from './app.component';
import { UserComponent } from './home/user/user.component';
import { EditTestComponent } from './test/edit-test/edit-test.component';
import { QuestionsComponent } from './question/questions/questions.component';
import { EditQuestionsComponent } from './question/edit-questions/edit-questions.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
    {
      path: 'edit/:userId',
     component: EditUser
    },
    {
      path: 'test/:userId',
      component: TestListComponent
    },
    {
      path: 'add',
      component: EditUser
    },
    {
      path: 'test/:userId/add',
      component: EditTestComponent
    },
    {
      path: 'test/:userId/edit/:testId',
      component: EditTestComponent
    },
    {
      path: 'test/:userId/questions/:testId',
      component: QuestionsComponent
    },
    {
      path: 'test/:userId/questions/:testId/add',
      component: EditQuestionsComponent
    },
    {
      path: 'test/:userId/questions/:testId/edit/:questionId',
      component: EditQuestionsComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {}