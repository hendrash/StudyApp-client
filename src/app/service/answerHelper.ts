import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { AnswerDto } from '../dto/AnswerDto';
import { AnswerApi } from '../api/answer-api.service';

@Injectable({
    providedIn: 'root'
}) 
export class AnswerHelper{
    private answerDto = new BehaviorSubject<AnswerDto[]>(new Array());
    constructor(private answerApi: AnswerApi){}
    public loadTest(answerId: number){
        this.answerApi.getAll(answerId).subscribe(result=>{
            this.answerDto.next(result);
        });
    }
    public getAll(){
        return this.answerDto;
    }
    public delete(answerId: number){
        return this.answerApi.delete(answerId);
    }
}
