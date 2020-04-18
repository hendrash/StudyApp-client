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
}
