import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { UserListResolver } from './user-list.resolve';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  providers: [UserListResolver]
})
export class UserListModule { }
