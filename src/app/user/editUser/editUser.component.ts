import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDto } from 'src/app/dto/userDto';
import { UserApi } from 'src/app/api/user-api.service';
import { UserHelper } from 'src/app/service/userHelper';

@Component({
  selector: 'app-edit-user',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.scss']
})
export class EditUser implements OnInit {
  public mode: string;
  private id: number;
  private myForm: FormGroup;
  private currentUser: UserDto;
  constructor(
    private router: Router,
    private userApi:UserApi,
    private route: ActivatedRoute,
    private userHelper: UserHelper
  ) { }

  ngOnInit(): void {
    this.userHelper.loadUsers();
    this.createUserForm();
  if(this.router.url.indexOf('/add')){

    this.mode='Edit';  
  this.processForm();
  }
  if(this.router.url.indexOf('/edit')){
  this.mode='Add';
  }
}
private processForm(){
    this.route.params.subscribe(parms=>(this.id=parms.userId));
    this.userHelper.getAllUsers().subscribe((u)=>{
      if(u&&u.length>0){
        const indexOfUser = u.findIndex(
          uIndex=>(uIndex.userId==this.id));
        this.currentUser=u[indexOfUser];
        this.initForm();
      }
    });
}
createUserForm(){
  this.myForm= new FormGroup({
   uname: new FormControl(null, Validators.required),
   fname: new FormControl(null, Validators.required),
   lname: new FormControl(null, Validators.required),
   email: new FormControl(null, Validators.required),
   password: new FormControl(null)
  });
}


get uname(){
  return this.myForm.get('uname');
}
get fname(){
  return this.myForm.get('fname');
}
get lname(){
  return this.myForm.get('lname');
}
get email(){
  return this.myForm.get('email');
}
get password(){
  return this.myForm.get('password');
}
save(){
  const userDto: UserDto={
    email: this.email.value,
    uname: this.uname.value,
    firstName: this.fname.value,
    lastName: this.lname.value,
    password: this.password.value,
    userId: this.id
  }
  
  if(this.mode==="Edit"){
    this.userApi.edit(userDto).subscribe(
      ()=>this.router.navigate(['']))
  }
  if(this.mode==="Add"){

  this.userApi.create(userDto).subscribe(
    ()=>{this.router.navigate(['']);}
  )

  }
}
public initForm(){
  this.uname.setValue(this.currentUser.uname);
  this.fname.setValue(this.currentUser.firstName);
  this.lname.setValue(this.currentUser.lastName);
  this.email.setValue(this.currentUser.email);
  this.password.setValue(this.currentUser.password);
}
}