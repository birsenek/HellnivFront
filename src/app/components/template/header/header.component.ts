import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from 'src/app/app.module';

@Component({
  selector: 'Helniv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = {
    user : ""
  }

  constructor(private headerService: HeaderService,
    private jwtHelper: JwtHelperService,
    private router: Router) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
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
    this.router.navigate(["/"]);
  }

}
