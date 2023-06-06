import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, find, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/response/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject({} as User);
  public readonly currentUser: Observable<User> = this.currentUserSubject.asObservable();

  private currentUsersSubject: BehaviorSubject<User[]> = new BehaviorSubject({} as User[]);
  public readonly userList: Observable<User[]> = this.currentUsersSubject.asObservable();

  constructor() { }

  /**
   * @description metodo que seatea el usuario
   * @param currentUser
   */
  setCurrentUser(currentUser: User): void {
    this.currentUserSubject.next(currentUser);
  }

  /**
   * @description metodo que setea la lista de usuarios
   * @param userList 
   */
  setUserList(userList: User[]): void {
    this.currentUsersSubject.next(userList);
  }



}
