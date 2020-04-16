import { Injectable } from "@angular/core";
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';
import { QuestionDto } from '../dto/questionDto';
import { AnswerDto } from '../dto/AnswerDto';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnswerApi extends BaseApi{
    public getAll(questionId: number): Observable<AnswerDto[]>{
        let payload= new HttpParams;
        payload= payload.append('questionId', questionId.toString());
        return this.httpClient.get<AnswerDto[]>(`${this.basesUrl}/answer/getAll`, {params: payload});
    }
    public delete(questionId: number): any{
        return this.httpClient.delete<any>(`${this.basesUrl}/answer/delete?questionId=${questionId}`);
    }
    public edit(questionDto: QuestionDto){
        return this.httpClient.put<QuestionDto>(`${this.basesUrl}/question/update`, questionDto);
    }
    public create(qusetionDto: QuestionDto){
        return this.httpClient.post<any>(`${this.basesUrl}/question`,qusetionDto);
    }
}