import { Component, ElementRef, ViewChild } from '@angular/core';
import { PRODUCTS } from '../mock-products-list';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {
  ItemAdd = {}
  isAdd = false

  ngOnInit(): void {
    for( let i = 1; i<=3; i++ ) {
      if( localStorage.getItem("item" + i) != null){
        console.table(localStorage.getItem("item" + i))
        this.ItemAdd = JSON.parse(localStorage.getItem("item" + i) || '{}')
      }
      this.isAdd = true
    }
    this.addTable()
  }

  ngAfterViewInit(){}

  addTable(){
    //let cartProduct = document.getElementById("cart-products")
  }
}
