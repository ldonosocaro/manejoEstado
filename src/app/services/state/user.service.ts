import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserResponse } from 'src/app/response/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject({} as User);
  public readonly currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor() { }

  /**
   * @description metodo que seatea el usuario
   * @param currentUser
   */
  setCurrentUser(currentUser: User): void {
    this.currentUserSubject.next(currentUser);
  }

  getUsers(): Observable<any> {
    return of({
      status: '200',
      response: [
        { name: "Luis Donoso", age: 37, department: [20, 30] },
        { name: "Manuel Donoso", age: 41, department: [20] },
      ]
    })
  }

  getUser(): Observable<UserResponse> {
    return of({
      status: '200',
      response: {name: "Luis Donoso", age: 23, department: [12, 45]}
    })/*  */
  }

}
