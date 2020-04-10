import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { TestDto } from '../dto/testDto';
import { TestApi } from '../api/test-api.service';

@Injectable({
    providedIn: 'root'
})
export class Testhelper{
    private testDto = new BehaviorSubject<TestDto[]>(new Array());
    constructor(private testApi: TestApi){}
    public loadTests(testId: number){
        this.testApi.getAll(testId).subscribe(result=>{
            this.testDto.next(result);
        });
    }
    public getAll(){
        return this.testDto;
    }
    public delete(testId: number){
        return this.testApi.delete(testId);
    }
}