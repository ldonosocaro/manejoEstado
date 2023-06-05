import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserListResolver } from './user-list.resolve';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    resolve: {rslv: UserListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
