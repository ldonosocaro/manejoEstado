import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
  {
    path: 'user/list',
    loadChildren: () => import('./components/user-list/user-list.module').then((m) => m.UserListModule)
  },
  {
    path: 'user/update',
    loadChildren: () => import('./components/user-update/user-update.module').then((m) => m.UserUpdateModule)
  },
  {
    path: 'error/:errorType',
    loadChildren: () => import('./components/error/error.module').then((m) => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
