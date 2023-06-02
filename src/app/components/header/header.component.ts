import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
 export class HeaderComponent {
 private _cart: Cart= {items:[]};

 @Input() 
 get cart(): Cart{
  return this._cart;
 }
 set cart(cart:Cart){
  this._cart= cart;
  this.itemsQuantity= cart.items.map((item)=> item.quantity).reduce((prev,current)=>prev+ current, 0);
 }
 itemsQuantity=0;
 constructor(private cartServie: CartService){}
  getTotal(items:Array<CartItem>):number{
  return this.cartServie.getTotal(items)
  
  }
  OnCleartCart():void{
    this.cartServie.clearCart();
  }

}
