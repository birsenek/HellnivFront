import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }

}
