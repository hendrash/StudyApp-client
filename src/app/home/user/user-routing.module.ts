import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from 'src/app/user/create/create.component';
import { TestListComponent } from 'src/app/test/testList/testList.component';


const routes: Routes = [

  {
    path: 'add',
    component: CreateComponent
  },
  {
    path: 'edit/:uId',
    component: CreateComponent
  },
  {
    path: 'test/:uId',
    component: TestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class userRoutingModule  {}