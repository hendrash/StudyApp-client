import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUser } from './editUser.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

describe('CreateComponent', () => {
  let component: EditUser;
  let fixture: ComponentFixture<EditUser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ EditUser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
const routes: Routes=[
  {path: 'edit/2', component: EditUser}]
});
