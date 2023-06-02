import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { async } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {
cart: Cart = {items:[{
  product: 'https://via.placeholder.com/150',
  name: 'snickers',
  price: 150,
  quantity: 1,
  id: 1
},{
  product: 'https://via.placeholder.com/150',
  name: 'snickers',
  price: 150,
  quantity: 1,
  id: 2
}]};
constructor(private cartService: CartService, private http:HttpClient){

}
dataSource: Array<CartItem>= [];
displayedColumns: Array<string> = [
 'product',
 'name',
 'price',
 'quantity',
 'total',
 'action'];

ngOnInit():void{
  this.dataSource= this.cart.items;
  this.cartService.cart.subscribe((_cart:Cart)=>{this.cart=_cart;
  this.dataSource=this.cart.items})
}

getTotal(items:Array<CartItem>):number{
return this.cartService.getTotal(items)

}
onClearCart():void{
  this.cartService.clearCart();
}
onRemoveFromCart(element:CartItem):void{
  this.cartService.removeFromCart(element);
}
onAddQuantity(item:CartItem):void{
  this.cartService.addToCart(item)
}
onRemoveQuantity(item:CartItem):void{
  this.cartService.removeQuantity(item);
}
onCheckOut():void{
  this.http.post('http://localhost:4242/checkout',{items:this.cart.items}).subscribe(async(res:any)=>{let stripe = await loadStripe('pk_test_51NEfFhGFYMyYMLRhXp3QcwScoveBM70pv3Edn4cv6sZCcBZgBUh4zolP6om1A2jjvCj71mF4vclUETeJrfJouFSG00cZIT93f2');
  stripe?.redirectToCheckout({
    sessionId: res.id
  })
});
}
}
