import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
    declarations:[
        UserComponent
    ],
    imports: [UserRoutingModule]
})
export class UserModule{}