import { UserService } from './../user.service';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../login.model';
import { AuthenticatedResponse } from '../authenticated-response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'Helniv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  invalidLogin: boolean;

  credentials: Login = {
    login: "",
    password: ""
  };
  
  constructor(private userService : UserService,
    private router: Router,
    private headerService : HeaderService,
    private route: ActivatedRoute) { 
      headerService.headerData = {
        title: 'Login',
        icon: 'account_circle',
        routeUrl: '/users/login'
      }
    }

  ngOnInit(): void {
  }

  userLogin() : void
  {   
    this.userService.userLogin(this.credentials).subscribe({
      next: (response: AuthenticatedResponse) => {
        const token = response.token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.userService.showMessage("Usuário conectado com sucesso!");
        this.router.navigate(["/"]);
      },
      error: (err: HttpErrorResponse) => this.invalidLogin = true
    })
    
  }

}
