import { Component, OnInit } from '@angular/core';
import { QuestionDto } from 'src/app/dto/questionDto';
import { QuestionHelper } from 'src/app/service/questionHelper';
import { Router, ActivatedRoute } from '@angular/router';
import { Testhelper } from 'src/app/service/testHelper';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AnswerDto } from 'src/app/dto/AnswerDto';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('detailExpand',[
      state('collapsed',style({height: '*', minHeight:'*'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class QuestionsComponent implements OnInit {
  public dataSource: QuestionDto[];
  private testId:number;
  private userId: number;
  public totalScore: number=0;
  expandedElement: AnswerDto | null;
  public displayedColumns=['question','hint','action'];
  public expanedColumnes=['answer']
  constructor(
    private questionHelper: QuestionHelper,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.route.params.subscribe(param=>(
    this.userId=param.userId,
    this.testId=param.testId));
  this.getQuestions();
}

getQuestions(){
  this.questionHelper.loadQuestions(this.testId);
  this.questionHelper.getAll().subscribe(result=>{
    result.forEach(t=>t.answer.forEach(t=>{t.isChecked=false}));
    this.dataSource=result;
      });
}

remove(qId: number){
  console.log(qId);
  this.questionHelper.delete(qId).subscribe(r=>{
    this.questionHelper.loadQuestions(this.testId);
  });
}
edit(questionId: number){
  this.router.navigate(['test/'+this.userId+'/questions/'+this.testId+'/edit/',questionId]);
}
create(){
  this.router.navigate(['test/'+this.userId+'/questions/'+this.testId+'/add']);
}
check(qId:number,aId:number){
  this.dataSource.find(t=>t.questionId===qId).answer.find(t=>t.answerId===aId).isChecked=!this.dataSource.find(t=>t.questionId===qId).answer.find(t=>t.answerId===aId).isChecked;
  this.dataSource.find(t=>t.questionId===qId).displayAnswer=false;
}

submit(qId:number){
this.dataSource.find(t=>t.questionId===qId).isCorrect=this.dataSource.find(t=>t.questionId===qId).answer.find(t=>
  t.isChecked!=t.correct)!=null?false:true;
this.dataSource.find(t=>t.questionId===qId).displayAnswer=true
this.getScore();
}
getScore(){
  this.totalScore=0
  this.dataSource.forEach(t=>{
    if(t.isCorrect){
      this.totalScore++;
    }
  })
this.totalScore=this.totalScore/this.dataSource.length*100;
}
back(){
  this.router.navigate(['test/'+this.userId]);
}

}
