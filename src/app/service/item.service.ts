import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Item } from '../classes/item';

@Injectable()
export class ItemService {
  public items: Item[] = [];
  constructor(private storage: LocalStorageService) { }

  getItems() {
    if(localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItem(id: string) {
    return this.items.find(item => item.id == id);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.saveItems();
  }

  delteItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.saveItems();
  }
}
