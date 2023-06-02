import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange= new EventEmitter<number>();
 sort= "descending";
 itemsShowCount= 12;
 
 onSortUpdated(Newsort:string):void{
  this.sort= Newsort;
 }
 onItemsUpdated(newCount:number):void{
  this.itemsShowCount=newCount;
 }
 onColumnsUpdated(newColumns:number):void{
  this.columnsCountChange.emit(newColumns);
 }
}
