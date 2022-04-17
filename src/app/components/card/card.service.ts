import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Card } from './card.model';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = "https://localhost:7213/card"

  constructor(
    private snackBar: MatSnackBar,
    private httpRequest: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    })
  }

  create(card: Card): Observable<Card> {
    return this.httpRequest.post<Card>(this.baseUrl, card)
  }
}
