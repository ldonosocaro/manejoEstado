import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailResolver } from './user-detail.resolve';

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent,
    resolve: {rslv: UserDetailResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailRoutingModule { }
