import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
 update_product: Product;
  @Input() products: Product[];
  @Output() updateProduct : EventEmitter<Product> = new EventEmitter()
  @Output() productIndex : EventEmitter<number> = new EventEmitter()
  @Output() productDeleteEmit : EventEmitter<number> = new EventEmitter()
  constructor() {
    this.update_product = {
      id: "0",
      name: "null",
      quantity: 0,
      purchasePrice: 1,
      salePrice: 2,
      availble: true
    }
   }
  ngOnInit(): void {}
  productUpdate(product:Product, index: number){
    this.update_product = product
    this.productIndex.emit(index)
  }
  updateProductEmit(product:Product){
    this.updateProduct.emit(product)
  }
  productDelete(index:number){
    this.productDeleteEmit.emit(index)
  }
}
