import { Component, OnInit } from '@angular/core';
import { TestDto } from 'src/app/dto/testDto';
import { Testhelper } from 'src/app/service/testHelper';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './testList.component.html',
  styleUrls: ['./testList.component.scss']
})
export class TestListComponent implements OnInit {
  public dataSource: TestDto[];
  private userId: number;
  public displayedColumns=['testName', 'edit'];
  constructor(
    private testHelper: Testhelper,
    private router: Router,    
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(parms=>(this.userId=parms.userId));
    this.getTest();
  }
  getTest(){
    this.testHelper.loadTests(this.userId);
    this.testHelper.getAll().subscribe(result=>{
      this.dataSource=result;
    });
  }
  open(uId: number){
    this.router.navigate(['test/'+this.userId+'/questions/',uId]);
  }
  remove(uId: number){
    this.testHelper.delete(uId).subscribe(r=>{
      this.testHelper.loadTests(uId);
    });
  }
  edit(testId:number){
   
    this.router.navigate(['test/'+this.userId+'/edit',testId]);
  }
  create(){
    this.router.navigate(['test/'+this.userId+'/add']);
  }
}
