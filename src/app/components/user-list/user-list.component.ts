import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/response/user-response';
import { UserService } from 'src/app/services/state/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  public userData: User;
  private userSubscription: Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
/*     this.userSubscription = this.userService.getUser().subscribe((data: UserResponse) => {
      debugger;
      this.userData = data.response;
    }); */
    debugger;
    this.userSubscription = this.userService.currentUser.subscribe(data => this.userData = data);
  }

  ngOnDestroy(): void {
    //this.userSubscription.closed;
    this.userSubscription?.unsubscribe();
  }

}
