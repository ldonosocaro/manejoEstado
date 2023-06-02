import { Injectable } from '@angular/core';
import { IError } from 'src/app/interface/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  setErrorType(type: string): IError {
    let errorData: IError = undefined;
    switch (type) {
      case 'robot':
      default:
        errorData = {
          icon: "bi-x-circle",
          message: "Error al cargar los datos.",
          backUrl: "user-list"
        }
        break;
    }
    return errorData;
  }
}
