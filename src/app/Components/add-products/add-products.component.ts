import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  p_id: string;
  name: string;
  quantity: number;
  purchase_price: number;
  sale_price: number;
  @Output() addProduct : EventEmitter<Product> = new EventEmitter()
  constructor() {  }
  ngOnInit(): void {}
  handleSubmit(){
    const product = {
      id:this.p_id,
      name: this.name,
      quantity: this.quantity,
      purchasePrice: this.purchase_price,
      salePrice: this.sale_price,
      availble: true
    }
    if(product.quantity <= 0){
      alert("Quantity must be more than 0")
    }else if(product.salePrice < product.purchasePrice){
      alert("Sale price must be more than purchase price")
    }else{
      this.addProduct.emit(product)
    }
  }
}
