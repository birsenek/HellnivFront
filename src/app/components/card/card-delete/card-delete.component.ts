import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card.model';
import { CardService } from '../card.service';

@Component({
  selector: 'Helniv-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {
  card: Card;

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //@ts-ignore
    this.cardService.readById(id).subscribe(card => {
      this.card = card;
    });
  }

  deleteCard(): void {
    this.cardService.delete(this.card.id).subscribe(() => {
      this.cardService.showMessage('Carta excluída com sucesso');
      this.router.navigate(["/cards"]);
    })
  }

  cancelCard(): void {
    this.router.navigate(['/cards']);
  }

}
