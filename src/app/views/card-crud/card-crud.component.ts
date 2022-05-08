import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Helniv-card-crud',
  templateUrl: './card-crud.component.html',
  styleUrls: ['./card-crud.component.css']
})
export class CardCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService : HeaderService) { 
    headerService.headerData = {
      title: 'Cartas',
      icon: 'videogame_asset',
      routeUrl: '/cards'
    }
  }

  ngOnInit(): void {
  }

  navigateToCardCreate(): void {
    this.router.navigate(['/cards/create'])
  }
}
