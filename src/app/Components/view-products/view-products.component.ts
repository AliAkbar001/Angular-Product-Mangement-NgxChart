import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/Product';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  update_product: Product;
  products: Product[];
  productIndex: number
 // @Output() updateProduct : EventEmitter<Product> = new EventEmitter()
  //@Output() productIndex : EventEmitter<number> = new EventEmitter()
  //@Output() productDeleteEmit : EventEmitter<number> = new EventEmitter()
  constructor(private SubjectInServices :SubjectServiceService) {
    this.products = this.SubjectInServices.products
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
  //  this.productIndex.emit(index)
    this.productIndex= index
 }
 // updateProductEmit(product:Product){
  //  this.updateProduct.emit(product)
  //}
  productDelete(index:number){
    this.SubjectInServices.deleteProductFunction(index)
    //this.productDeleteEmit.emit(index)
  }
}
