import { Component } from '@angular/core';
import { PRODUCTS } from '../mock-products-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  list = PRODUCTS;

  ngOnInit(): void {
  }

  AddItem(idItem : number){
    localStorage.setItem('item' + this.list[idItem-1].id, JSON.stringify(this.list[idItem-1]))
  }
}
