import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../card/card-read-template/card-read-template.component';

@Component({
  selector: 'Helniv-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
