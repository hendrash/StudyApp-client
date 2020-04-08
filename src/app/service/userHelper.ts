import { Injectable } from '@angular/core';
import { UserApi } from '../api/user-api.service';
import { BehaviorSubject } from 'rxjs';
import { UserDto } from '../dto/userDto';

@Injectable({
    providedIn: 'root'
})
export class UserHelper{
    private userDto = new BehaviorSubject<UserDto[]>(new Array());
constructor(private userApi: UserApi){}
public loadUsers(){
    this.userApi.getAll().subscribe(result=>{
        this.userDto.next(result);
    });
}
public getAllUsers(){
    return this.userDto;
}
public deleteUser(userId: number){
    return this.userApi.delete(userId);
}
}