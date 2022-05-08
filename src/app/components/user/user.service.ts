import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, EMPTY, map, Observable } from 'rxjs';
import { User } from './user.model';
import { Login } from './login.model';

@Injectable({
    providedIn: 'root'
  })

export class UserService {
    
    baseUrl = "https://localhost:7111/api/user"
    
    constructor(
        private snackBar: MatSnackBar,
        private httpRequest: HttpClient
    ) {}

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "bottom",
          panelClass: isError? ['msg-error'] : ['msg-success']
        })
      }

    getAll(): Observable<User[]> {
        return this.httpRequest.get<User[]>(this.baseUrl);
    }

    createUser(user: User): Observable<User> {
        return this.httpRequest.post<User>(this.baseUrl, user);
    }

    userLogin(login: Login): Observable<Login> {
      const url = `${this.baseUrl}/login`
      return this.httpRequest.post<Login>(url, login)
        .pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e))
        )
    }

    errorHandler(e: any): Observable<any>{
      this.showMessage("Erro ao logar. Verifique sua senha.", true);
      return EMPTY;
    }

}