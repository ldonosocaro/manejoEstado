import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserResponse } from 'src/app/response/user-response';
import { UserDetailService } from 'src/app/services/component/user-detail.service';
import { UserStateService } from 'src/app/services/state/user-state.service';

@Injectable({ providedIn: 'root' })
export class YourResolver implements Resolve<void> {

  constructor(private userService: UserStateService, private userDetailService: UserDetailService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<void> {
    let userId = undefined;
    route.params.subscribe(params => {
      userId = params['userId']
    });
    return this.userDetailService.getUser(userId).pipe(
      take(1),
      map((data: UserResponse) => {
        if (data.status === '200') {
          this.userService.setCurrentUser(data.response);
          return;
        }
        else {
          this.router.navigate(['error/robot']);
        }
      })
    );
  }
}