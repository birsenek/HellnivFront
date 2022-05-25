import { AuthenticatedResponse } from './authenticated-response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        return this.httpRequest.post<User>(this.baseUrl, user)
        .pipe(
          catchError(e => this.errorHandler(e))
        );
    }

    userLogin(login: Login): Observable<AuthenticatedResponse> {
      const url = `${this.baseUrl}/login`
      return this.httpRequest.post<Login>(url, login, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
        .pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e))
        )
    }

    errorHandler(e: any): Observable<any>{
      switch (e.status)
      {
        case 403:
          this.showMessage("Acesso não autorizado. Verifique suas permissões de perfil.", true);
          break;
        case 400:
          this.showMessage("Dados inválidos. Por gentilza verificar as informações inseridas.", true)
          break;
        default:
          this.showMessage("Erro ao logar. Verifique sua senha.", true);
          break;
      }
      
      
        
      return EMPTY;
    }

}