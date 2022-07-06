import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[]
  indexNumber: number
  localProducts: string | null;
  constructor() {
    this.localProducts = localStorage.getItem("products")
    if(this.localProducts === null){
      this.products = []
    }else{
      this.products = JSON.parse(this.localProducts)
    } 
  }
  ngOnInit(): void {}
  insertProduct(product: Product){
    this.products.push(product)
    localStorage.setItem("todos", JSON.stringify(this.products))
  }
  productIndex(index: number){
    this.indexNumber = index
  }
  modifyProduct(product:Product){
    this.products[this.indexNumber].id = product.id;
    this.products[this.indexNumber].name = product.name;
    this.products[this.indexNumber].quantity = product.quantity;
    this.products[this.indexNumber].purchasePrice = product.purchasePrice;
    this.products[this.indexNumber].salePrice = product.salePrice;
    localStorage.setItem("todos", JSON.stringify(this.products))
  }
  
}
