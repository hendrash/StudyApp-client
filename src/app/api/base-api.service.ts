import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class BaseApi{
    protected basesUrl: string;
    protected baseApiPath='/api'
    constructor(protected httpClient: HttpClient){
        this.basesUrl="http://localhost:8080"+this.baseApiPath;
    }
}