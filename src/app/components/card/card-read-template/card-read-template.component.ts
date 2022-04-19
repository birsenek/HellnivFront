import { CardService } from './../card.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Card } from '../card.model';
import { CardReadTemplateDataSource } from './card-read-template-datasource';

@Component({
  selector: 'Helniv-card-read-template',
  templateUrl: './card-read-template.component.html',
  styleUrls: ['./card-read-template.component.css']
})
export class CardReadTemplateComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Card>;
  dataSource: CardReadTemplateDataSource;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['rowNumber', 'id', 'name', 'elemento', 'tipo', 'poderFogo', 'poderAgua', 'poderTerra', 'poderAr', 'action'];

  constructor(private cardService: CardService) {
    this.dataSource = new CardReadTemplateDataSource(cardService);
  }

  ngAfterViewInit(): void {
    this.cardService.read().subscribe(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      })
  }
}
