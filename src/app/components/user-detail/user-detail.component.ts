import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserStateService } from 'src/app/services/state/user-state.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  public userData: User;
  private userSubscription: Subscription;

  constructor(private userStateService: UserStateService, private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userSubscription = this.userStateService.currentUser.subscribe((data: User) => this.userData = data);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
