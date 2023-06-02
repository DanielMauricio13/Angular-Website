import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent {
  @Output() showCategoria= new EventEmitter<string>();
  categories= ['shoes','sports', 'shirts'];
  cat:string|undefined;
  onShowCategory(categoria:string):void{
    this.showCategoria.emit(categoria);
    this.cat=categoria;
  }
}
