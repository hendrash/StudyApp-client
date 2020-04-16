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
    public delete(answerId: number): any{
        return this.httpClient.delete<any>(`${this.basesUrl}/answer/delete?answerId=${answerId}`);
    }
    public edit(questionDto: AnswerDto){
        return this.httpClient.put<AnswerDto>(`${this.basesUrl}/answer/update`, questionDto);
    }
    public create(qusetionDto: AnswerDto){
        return this.httpClient.post<any>(`${this.basesUrl}/answer`,qusetionDto);
    }
}