import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Helniv-card-crud',
  templateUrl: './card-crud.component.html',
  styleUrls: ['./card-crud.component.css']
})
export class CardCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCardCreate(): void {
    this.router.navigate(['/cards/create'])
  }
}
