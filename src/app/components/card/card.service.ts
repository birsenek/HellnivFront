import { ObserversModule } from '@angular/cdk/observers';
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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  create(card: Card): Observable<Card> {
    return this.httpRequest.post<Card>(this.baseUrl, card)
  }

  read(): Observable<Card[]> {
    return this.httpRequest.get<Card[]>(this.baseUrl)
  }

  readById(id: string): Observable<Card> {
    const url = `${this.baseUrl}/${id}`
    return this.httpRequest.get<Card>(url)
  }

  update(card: Card): Observable<Card> {
    const url = `${this.baseUrl}/${card.id}`
    return this.httpRequest.put<Card>(url, card)
  }

  delete(cardId: number): Observable<Card> {
    const url = `${this.baseUrl}/${cardId}`
    return this.httpRequest.delete<Card>(url)
  }

}
