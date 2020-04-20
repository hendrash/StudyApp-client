import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionsComponent } from './edit-questions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule,  FormArray } from '@angular/forms';
import { QuestionApi } from 'src/app/api/question-api.service';
import { QuestionHelper } from 'src/app/service/questionHelper';
import { AnswerApi } from 'src/app/api/answer-api.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSelectModule } from '@angular/material/select';



describe('EditQuestionsComponent', () => {
  let component: EditQuestionsComponent;
  let fixture: ComponentFixture<EditQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule,RouterTestingModule.withRoutes(routes),MatSelectModule ],

      providers:[QuestionApi, QuestionHelper, AnswerApi, FormArray],
       declarations: [ EditQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 const routes: Routes=[
{path: 'test/2/question/9/add',component: EditQuestionsComponent}]
});

