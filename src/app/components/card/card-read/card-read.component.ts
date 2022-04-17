import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'Helniv-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.css']
})
export class CardReadComponent implements OnInit {

  cards: Card[]
  displayedColumns = ['id', 'nome', 'elemento', 'tipo', 'poderFogo', 'poderAgua', 'poderTerra', 'poderAr', 'action']
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.read().subscribe(cards => {
      this.cards = cards
      console.log(cards)
    })
  }

}
