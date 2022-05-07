import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Helniv-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  card: Card = {
    id: 0,
    nome: "",
    elemento: "",
    tipo: "",
    poderFogo: 0,
    poderAgua: 0,
    poderTerra: 0,
    poderAr: 0,
    local: ''
  }
 
  file:File

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCard(): void {
    this.cardService.create(this.card, this.file).subscribe(() => {
      this.cardService.showMessage("Carta criada com sucesso!")
      this.router.navigate(['/cards'])
    })
  }

  cancelCard(): void {
    this.cardService.showMessage("Operação cancelada.")
    this.router.navigate(['/cards'])
  }

  onFileSelected(event) {

    this.file = event.target.files[0];

    if (this.file) {
        this.card.local = this.file.name;
    }
  }

}
