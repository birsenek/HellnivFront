import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from 'src/app/app.module';

@Component({
  selector: 'Helniv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {
    user : ""
  }

  constructor(private headerService: HeaderService,
    private jwtHelper: JwtHelperService) { 
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  isUserAuthenticated = (): boolean => {
    const token = tokenGetter();
    
    if (token && !this.jwtHelper.isTokenExpired(token)) 
    {
     console.log(this.jwtHelper.decodeToken(token));
     const decodedToken = this.jwtHelper.decodeToken(token);
     this.user.user = decodedToken.name;
      return true; 
    }
    else
    {
      return false;    
    }
  }

  logOut = () => {
    localStorage.removeItem("jwt");
  }
  
  ngOnInit(): void {
  }

}
