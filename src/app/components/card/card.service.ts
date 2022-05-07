import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEventPattern, Observable } from 'rxjs';
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

  create(card: Card, file: File): Observable<Card> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file, file.name);
    formData.append('nome', card.nome);
    formData.append('elemento', card.elemento);
    formData.append('tipo', card.tipo);
    formData.append('poderFogo', card.poderFogo.toString());
    formData.append('poderAgua', card.poderAgua.toString());
    formData.append('poderAr', card.poderAr.toString());
    formData.append('poderTerra', card.poderTerra.toString());
    formData.append('local', card.local);
    return this.httpRequest.post<Card>(this.baseUrl, formData)
  }

  read(): Observable<Card[]> {
    return this.httpRequest.get<Card[]>(this.baseUrl)
  }

  readById(id: string): Observable<Card> {
    const url = `${this.baseUrl}/${id}`
    return this.httpRequest.get<Card>(url)
  }

  update(card: Card, file: File): Observable<Card> {
    const formData: FormData = new FormData();
    formData.append('imageFile', file, file.name);
    formData.append('nome', card.nome);
    formData.append('elemento', card.elemento);
    formData.append('tipo', card.tipo);
    formData.append('poderFogo', card.poderFogo.toString());
    formData.append('poderAgua', card.poderAgua.toString());
    formData.append('poderAr', card.poderAr.toString());
    formData.append('poderTerra', card.poderTerra.toString());
    formData.append('local', card.local);
    const url = `${this.baseUrl}/${card.id}`
    return this.httpRequest.put<Card>(url, formData)
  }

  delete(cardId: number): Observable<Card> {
    const url = `${this.baseUrl}/${cardId}`
    return this.httpRequest.delete<Card>(url)
  }

  // uploadFile(file: File) {
  //   const formData: FormData = new FormData();
  //   const url = `${this.baseUrl}/upload`
  //   formData.append('fileKey', file, file.name);
  //   return this.httpRequest.post(url, formData);
  // }

}
