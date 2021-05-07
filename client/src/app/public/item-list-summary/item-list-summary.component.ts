import { Component, OnInit } from '@angular/core';

import {interval, Observable, Subscribable, Subscription} from 'rxjs';
import {ItemSummary} from '../../interfaces/itemSummary';
import {ItemService} from '../../services/item/item.service';

@Component({
  selector: 'app-item-list-summary',
  templateUrl: './item-list-summary.component.html',
  styleUrls: ['./item-list-summary.component.sass']
})
export class ItemListSummaryComponent implements OnInit {

  itemSummary$!: Observable<ItemSummary>;

  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit(): void {
    const url = 'http://localhost:4201/api/items/summary';
    this.itemSummary$ = this.itemService.getItemSummary(url);
  }
}
