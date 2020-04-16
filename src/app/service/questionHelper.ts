import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionDto } from '../dto/questionDto';
import { QuestionApi } from '../api/question-api.service';

@Injectable({
    providedIn:'root'
})
export class QuestionHelper{
    private questionDto = new BehaviorSubject<QuestionDto[]>(new Array());
    constructor(private questionApi: QuestionApi){}
    public loadQuestions(testId: number){
        this.questionApi.getAll(testId).subscribe(result=>{
            this.questionDto.next(result);
        });
    }
    public getAll(){
        return this.questionDto;
    }
    public delete(questionId: number){
        return this.questionApi.delete(questionId);
    }
}