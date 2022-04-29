import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Helniv-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService : HeaderService) { 
      headerService.headerData = {
        title: 'Usuários',
        icon: 'account_circle',
        routeUrl: '/users'

      }
    }

  ngOnInit(): void {
  }

}
