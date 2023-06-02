import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategoria= new EventEmitter<string>();
  categories:Array<string>|undefined;
  categoriesSubscription: Subscription | undefined;
  cat:string|undefined;
  constructor(private storeService: StoreService){
    this.storeService.getAllCategories().subscribe((response)=>this.categories= response);
  }
  onShowCategory(categoria:string):void{
    this.showCategoria.emit(categoria);
    this.cat=categoria;
  }
  ngOnInit(): void {
      this.categoriesSubscription= this.storeService.getAllCategories().subscribe((response)=>{this.categories=response});
  }
  ngOnDestroy(): void {
      if(this.categoriesSubscription){
        this.categoriesSubscription.unsubscribe();
      }
  }
}
