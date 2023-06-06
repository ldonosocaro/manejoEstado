import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersResponse } from 'src/app/response/users-response';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  getUsers(): Observable<UsersResponse> {
    return of({
      status: '200',
      response: [
        {id: 247, name: "Luis Donoso", age: 37, department: [20, 30] },
        {id: 458, name: "Manuel Donoso", age: 41, department: [20] },
      ]
    })
  }
}
