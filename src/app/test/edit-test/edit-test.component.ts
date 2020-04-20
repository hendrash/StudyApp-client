import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestDto } from 'src/app/dto/testDto';
import { Router, ActivatedRoute } from '@angular/router';
import { TestApi } from 'src/app/api/test-api.service';
import { UserHelper } from 'src/app/service/userHelper';
import { Testhelper } from 'src/app/service/testHelper';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.scss']
})
export class EditTestComponent implements OnInit {
public mode: string;
private id: number;
private userId: number;
private myForm: FormGroup;
private currentTest: TestDto;
private indexOfTest: number;

  constructor(
    private router: Router,
    private testApi: TestApi,
    private route: ActivatedRoute,
    private testHelper: Testhelper
  ) { }

  ngOnInit(){
   
    this.route.params.subscribe(parms=>{
      this.id=parms.testId;
      this.userId=parms.userId;
 
  
    });
    
    
    this.testHelper.loadTests(this.userId);
    this.createTestForm();
    if(this.router.url.indexOf('/add')>0){
        this.mode='Add';
    }
    if(this.router.url.indexOf('/edit')>0){
        this.mode='Edit';    
    }
      if(this.mode==='Edit'){
      this.processForm();
    }
  }
  private processForm(){
    this.testHelper.getAll().subscribe((tests:TestDto[])=>{
      if(tests&&tests.length>0){
        const indexOfTest=tests.findIndex(
          i=>(i.testId==this.id));
          this.currentTest= tests[indexOfTest];
          this.initForm();
      }
    })
  }
  createTestForm(){
    this.myForm = new FormGroup({
      tname: new FormControl(null, Validators.required)
    });
  }

  get tname(){
    return this.myForm.get('tname');
  }

  save(){
    const testDto: TestDto={
      testId: this.id,
      testName: this.tname.value,
      userIds: [],
      questionIds:[]
    }
    testDto.userIds.push(this.userId);
    if(this.mode==="Edit"){
      this.testApi.edit(testDto).subscribe(
        ()=>this.router.navigate(['test/'+this.userId]));
    }
    if(this.mode==="Add"){
      this.testApi.create(testDto).subscribe(
        ()=>{this.router.navigate(['test/'+this.userId]);}
      )
    }
  }
  private initForm(){
    this.tname.setValue(this.currentTest.testName);
  }
  back(){
    this.router.navigate(['']);
  }
}
