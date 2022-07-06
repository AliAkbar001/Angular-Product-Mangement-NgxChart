import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
 update_product: Product;
 indexNumber: number
  @Input() products: Product[];
  @Output() updateProduct : EventEmitter<Product> = new EventEmitter()
  @Output() productIndex : EventEmitter<number> = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }
  productUpdate(product:Product, index: number){
    this.update_product = product
    this.indexNumber = index
  }
  updateProductEmit(product:Product){
    this.updateProduct.emit(product)
    this.productIndex.emit(this.indexNumber)
  }
}
