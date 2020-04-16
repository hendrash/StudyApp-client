import { Component, OnInit } from '@angular/core';
import { QuestionDto } from 'src/app/dto/questionDto';
import { QuestionHelper } from 'src/app/service/questionHelper';
import { Router, ActivatedRoute } from '@angular/router';
import { Testhelper } from 'src/app/service/testHelper';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public dataSource: QuestionDto[];
  private testId:number;
  private userId: number;
  private questionId: number;
  public displayedColumns=['question','hint','action'];
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
