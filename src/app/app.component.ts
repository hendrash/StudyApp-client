import { Component, ViewChild } from '@angular/core';
import { NgModule, OnInit } from '@angular/core';

import { UserHelper } from './service/userHelper';
import { UserDto } from './dto/userDto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title= 'Personal Study Guide'
}