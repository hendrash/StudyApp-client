import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { TestListComponent } from './test/testList/testList.component';
import { AppComponent } from './app.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {}