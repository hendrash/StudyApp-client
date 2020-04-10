import { Injectable } from "@angular/core";
import { BaseApi } from './base-api.service';
import { UserDto } from '../dto/userDto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserApi extends BaseApi{
    public getAll(): Observable<UserDto[]>{
        return this.httpClient.get<UserDto[]>(`${this.basesUrl}/user/getAll`);
    }

    public delete(userId: number): any{
        return this.httpClient.delete<any>(`${this.basesUrl}/user/delete?userId=${userId}`);
    }

    public edit(userDto: UserDto){
        return this.httpClient.put<UserDto>(`${this.basesUrl}/user/update`, userDto);
    }
    public create(userDto: UserDto){
        return this.httpClient.post<any>(`${this.basesUrl}/user`, userDto);
    }
}