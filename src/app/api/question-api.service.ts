import { Injectable } from "@angular/core";
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';
import { QuestionDto } from '../dto/questionDto';

@Injectable({
    providedIn: 'root'
})
export class QuestionApi extends BaseApi{
    public getAll(testId: number): Observable<QuestionDto[]>{
        return this.httpClient.get<QuestionDto[]>(`${this.basesUrl}/question/getAll?testId=${testId}`);
    }
    public delete(questionId: number): any{
        return this.httpClient.delete<any>(`${this.basesUrl}/question/delete?questionId=${questionId}`);
    }

    public edit(questionDto : QuestionDto){
        return this.httpClient.put<QuestionDto>(`${this.basesUrl}/question/update`, questionDto);
    }
    public create(questionDto: QuestionDto){
        return this.httpClient.post<any>(`${this.basesUrl}/question`,questionDto);
    }

    public getQuestion(questionId: number){
        return this.httpClient.get<any>(`${this.basesUrl}/question/getQuestion?questionId=${questionId}`);
    }
    
}