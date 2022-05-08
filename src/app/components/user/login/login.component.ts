import { UserService } from './../user.service';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../login.model';

@Component({
  selector: 'Helniv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
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
    this.userService.userLogin(this.login).subscribe(() => {
      this.userService.showMessage('Usuário conectado com sucesso');
      this.router.navigate(["/"]);
    })
  }

}
