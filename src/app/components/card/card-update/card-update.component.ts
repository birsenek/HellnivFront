import { Card } from './../card.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';
@Component({
  selector: 'Helniv-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css']
})
export class CardUpdateComponent implements OnInit {
  
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

  updateCard(): void {
    this.cardService.update(this.card).subscribe(() => {
      this.cardService.showMessage('Produto atualizado com sucesso');
      this.router.navigate(["/cards"]);
    })
  }

  cancelCard(): void {
    this.router.navigate(['/cards']);
  }

}
