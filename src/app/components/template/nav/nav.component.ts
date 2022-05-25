import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { tokenGetter } from 'src/app/app.module';

@Component({
  selector: 'Helniv-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  items = ['Cartas', 'Usuários'];
  icons = ['videogame_asset', 'account_circle'];
  listarItems = ['Listar Cartas' , 'Listar Usuários'];
  listarRoutes = ['/cards', '/users'];
  cadastrarItems = ['Cadastar Carta', 'Cadastrar Usuário'];
  cadastrarRoutes = ['cards/create', 'users/create'];
  expandedIndex = 0;

  user = {
    user : ""
  }
  
  constructor(private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }

  isUserAuthenticated = (): boolean => {
    const token = tokenGetter();
    
    if (token && !this.jwtHelper.isTokenExpired(token)) 
    {
     const decodedToken = this.jwtHelper.decodeToken(token);
     this.user.user = decodedToken.name;
      return true; 
    }
    else
    {
      return false;    
    }
  }

}
