import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserResponse } from 'src/app/response/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor() { }

  getUser(userId: number): Observable<UserResponse> {
    return of({
      status: '200',
      response: userId === 247 ? {id: 247,name: "Luis Donoso", age: 23, department: [12, 45]} : {id: 458, name: "Manuel Donoso", age: 41, department: [20] }
    })
  }

}
