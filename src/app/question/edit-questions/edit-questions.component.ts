import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { QuestionDto } from 'src/app/dto/questionDto';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionApi } from 'src/app/api/question-api.service';
import { QuestionHelper } from 'src/app/service/questionHelper';
import { AnswersComponent } from 'src/app/answers/answers.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AnswerApi } from 'src/app/api/answer-api.service';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.scss']
})
export class EditQuestionsComponent implements OnInit {

  public mode: string
  private questionId: number;
  private testId: number;
  private userId: number;
  public myForm: FormGroup;
  private currentQuestion: QuestionDto;
  private indexOfQuestion: number;


  constructor(
    private router: Router,
    private questionApi: QuestionApi,
    private route: ActivatedRoute,
    private questionHelper: QuestionHelper,
    private answerApi: AnswerApi) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(parms=>{

      this.questionId=parms.questionId;
      this.testId=parms.testId;
      this.userId=parms.userId;
    });
    if(this.router.url.indexOf('/add')>0){
      this.mode='Add';
    }
    if(this.router.url.indexOf('/edit')>0){  
      this.mode='Edit';
      this.processForm();
    }

    this.createQuestionForm();
 
  }
  
processForm(){
   this.questionApi.getQuestion(this.questionId).subscribe(t=>{
    this.currentQuestion=t;
     this.initForm();
   })
}
createQuestionForm(){
  this.myForm= new FormGroup({
    question: new FormControl(null, Validators.required),
    hint: new FormControl(null, Validators.required),
    questionId: new FormControl(null),
    pAnswer: new FormArray([
      new FormGroup({
      answer:  new FormControl(null),
      description: new FormControl(null),
      correct: new FormControl(null),
      answerId: new FormControl(null)
      })
    ])
  });
 
}
save(){
let currentQuestion :QuestionDto={
  question: this.question.value,
  hint: this.hint.value,
  answer: this.pAnswer.value,
  testId: this.testId,
  questionId: null

}

if(this.mode==='Add'){
  this.questionApi.create(currentQuestion).subscribe((result)=>{
    this.questionHelper.loadQuestions(this.testId);
  });
}
if(this.mode==='Edit'){
   currentQuestion.questionId= this.currentQuestion.questionId; 
  this.currentQuestion.answer.forEach((q, i)=>{    
      currentQuestion.answer[i].answerId=q.answerId;
    })
  this.questionApi.edit(currentQuestion).subscribe((result)=>{
    
    this.questionHelper.loadQuestions(this.testId);
  });
}

this.router.navigate(['test/'+this.userId+'/questions/'+this.testId]);
}

get question(){
  return this.myForm.get('question');
}

get hint(){
  return this.myForm.get('hint');

}
get pAnswer(){
  return this.myForm.get('pAnswer') as FormArray;
}
get answer(){
  return this.myForm.get('answer');
}
get description(){
  return this.myForm.get('description');
}
get correct(){
  return this.myForm.get('correct');
}
get answerId(){
  return this.myForm.get('answerId');
}

private initForm(){
  this.question.setValue(this.currentQuestion.question);
  this.hint.setValue(this.currentQuestion.hint);
  //this.pAnswer.setValue(this.currentQuestion.answer);
  this.currentQuestion.answer.filter(t=>t.answer&&t.answer.length>0).forEach((a, index)=>{
    const prop = new FormGroup({
      answer: new FormControl(a.answer),
      description: new FormControl(a.description),
      correct: new FormControl(a.correct)
    });
   
    this.pAnswer.push(prop);
  })
   this.pAnswer.removeAt(0);
 
}

addAnswer(){
  const prop= new FormGroup({
    answer: new FormControl(null),
    description: new FormControl(null),
    correct: new FormControl
  })
  this.pAnswer.push(prop);
}
remove(index: number){
  this.pAnswer.removeAt(index);
  if(this.currentQuestion.answer[index]){
    this.answerApi.delete(this.currentQuestion.answer[index].answerId).subscribe(t=>{
      this.currentQuestion.answer=this.currentQuestion.answer.filter(t=>t.answerId!=this.currentQuestion.answer[index].answerId);
      this.questionHelper.loadQuestions(this.testId);
    });
    
   }

}


}
