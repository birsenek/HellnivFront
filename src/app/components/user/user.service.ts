import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
  })

export class UserService {
    
    baseUrl = "https://localhost:7111/api/user"
    
    constructor(
        private snackBar: MatSnackBar,
        private httpRequest: HttpClient
    ) {}

    getAll(): Observable<User[]> {
        return this.httpRequest.get<User[]>(this.baseUrl)
    }

}