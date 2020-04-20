import { Injectable } from "@angular/core";
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';
import { TestDto } from '../dto/testDto';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class TestApi extends BaseApi{
    public getAll(userId: number): Observable<TestDto[]>{
        let payload= new HttpParams;
        payload= payload.append('userId',userId+"")
        return this.httpClient.get<TestDto[]>(`${this.basesUrl}/test/getAll`,{params: payload})
    }

    public delete(testId: number): any{
        return this.httpClient.delete<any>(`${this.basesUrl}/test/delete?testId=${testId}`);
   }

   public edit(testDto: TestDto){
       return this.httpClient.put<TestDto>(`${this.basesUrl}/test/update`, testDto);
   }
   public create(testDto: TestDto){
       return this.httpClient.post<any>(`${this.basesUrl}/test`,testDto)
   }
}