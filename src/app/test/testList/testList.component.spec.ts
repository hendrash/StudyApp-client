import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListComponent } from './testList.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

describe('ListComponent', () => {
  let component: TestListComponent;
  let fixture: ComponentFixture<TestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ TestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const routes: Routes=[
    {path: 'test/2', component: TestListComponent}]
});
