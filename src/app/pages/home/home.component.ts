import { StoreService } from './../../services/store.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
const ROWS_HEIGHT: { [id:number]: number }= { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  cols=3;
  rowHeight =  ROWS_HEIGHT[this.cols];
  categoria:string |undefined;
  products: Array<Product> | undefined;
  sort= 'desc';
  count= '12';
  productsSubscription: Subscription | undefined;
  constructor(private cartService:CartService, private storeService: StoreService){

  }
  ngOnInit(): void {
      this.getProducts();
  }
  getProducts():void{
    this.productsSubscription= this.storeService.getAllProducts(this.count,this.sort, this.categoria).subscribe((_products)=>{this.products= _products});
  }
  ngOnDestroy(): void {
      if(this.productsSubscription){
        this.productsSubscription.unsubscribe();
      }
  }
onColumnsCountChange(colsNum:number):void{
  this.cols = colsNum;
  this.rowHeight= ROWS_HEIGHT[this.cols];
}
onShowCategory(Newcategory:string):void{
  this.categoria= Newcategory;
  this.getProducts();
}
onAddToCart(product: Product):void{
  this.cartService.addToCart({
    product: product.image,
    name:product.title,
    price: product.price,
    quantity:1,
    id: product.id
  })
}
onItemsCountChange(count:number):void{
  this.count= count.toString();
  this.getProducts();
}
onSortChange(Newsort:string):void{
 this.sort=Newsort;
 this.getProducts();
}
}
