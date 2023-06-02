import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/response/user-response';
import { UserService } from 'src/app/services/state/user.service';

@Injectable({ providedIn: 'root' })
export class UserListResolver implements Resolve<UserResponse> {

    constructor(private userService: UserService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<UserResponse> {
        return this.userService.getUser().pipe(
            take(1),
            map(data => {
                console.log(data)
                if (data.status === '200') { return data; }
                else { this.router.navigate(['error/robot']); }
            })
        );
    }
}