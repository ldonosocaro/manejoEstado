import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/response/user-response';
import { UserStateService } from 'src/app/services/state/user-state.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  public userList: User[];
  private userSubscription: Subscription;

  constructor(private userStateService: UserStateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.userSubscription = this.userStateService.userList.subscribe((data: User[]) => this.userList = data);
  }

  ngOnDestroy(): void {
    this.userSubscription.closed;
    this.userSubscription?.unsubscribe();
  }

}
