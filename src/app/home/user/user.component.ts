import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/dto/userDto';
import { Router } from '@angular/router';
import { UserHelper } from 'src/app/service/userHelper';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public dataSource:UserDto[]; 
  public displayedColumns =['uname','fname', 'lname', 'edit'];
  constructor(private userHelper: UserHelper,
    private router:Router){}

  ngOnInit(){
    this.getUsers();
   
    
  } 
  getUsers(){
    this.userHelper.loadUsers();
    this.userHelper.getAllUsers().subscribe(result=>{
      this.dataSource=result;
    });
  }
   open(uId: number){
    this.router.navigate(['test',uId]);
  }
   remove(uId: number){
    this.userHelper.deleteUser(uId).subscribe(r=>{
      this.userHelper.loadUsers();
    });
  }
   edit(uId: number){
   this.router.navigate(['edit',uId]);
  }
  create(){
    this.router.navigate(['add']);
  }
}
