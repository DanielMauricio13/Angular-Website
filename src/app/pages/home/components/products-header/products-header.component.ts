import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange= new EventEmitter<number>();
  @Output() itemsCountChange= new EventEmitter<number>();
  @Output() sortChange= new EventEmitter<string>();
 sort= "desc";
 itemsShowCount= 12;
 
 onSortUpdated(Newsort:string):void{
  this.sort= Newsort;
  this.sortChange.emit(Newsort);
 }
 onItemsUpdated(newCount:number):void{
  this.itemsShowCount=newCount;
  this.itemsCountChange.emit(newCount);
 }
 onColumnsUpdated(newColumns:number):void{
  this.columnsCountChange.emit(newColumns);
 }
}
