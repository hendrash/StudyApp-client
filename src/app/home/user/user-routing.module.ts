import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestListComponent } from 'src/app/test/testList/testList.component';


const routes: Routes = [

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule  {}