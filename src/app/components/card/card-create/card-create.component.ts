import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card.model';

@Component({
  selector: 'Helniv-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  card: Card = {
    nome: "",
    elemento: "",
    tipo: "",
    poderFogo: 0,
    poderAgua: 0,
    poderTerra: 0,
    poderAr: 0
  }

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCard(): void {
    this.cardService.create(this.card).subscribe(() => {
      this.cardService.showMessage("Carda criada com sucesso!")
      this.router.navigate(['/cards'])
    })
  }

  cancelCard(): void {
    this.cardService.showMessage("Operação cancelada.")
    this.router.navigate(['/cards'])
  }
}
