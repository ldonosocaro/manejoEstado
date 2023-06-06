import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/response/user-response';
import { UsersResponse } from 'src/app/response/users-response';
import { UserListService } from 'src/app/services/component/user-list.service';
import { UserStateService } from 'src/app/services/state/user-state.service';

@Injectable({ providedIn: 'root' })
export class UserListResolver implements Resolve<void> {

    constructor(private userListServuce: UserListService, private userService: UserStateService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<void> {
        return this.userListServuce.getUsers().pipe(
            //take(1),
            map((data: UsersResponse) => {
                console.log(data)
                if (data.status === '200') {
                  this.userService.setUserList(data.response);
                  return;
                }
                else {
                  this.router.navigate(['error/robot']);
                }
            })
        );
    }
}
