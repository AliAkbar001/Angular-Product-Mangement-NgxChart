import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  products : Product[]
  localProducts: string | null
  modifyProduct = new BehaviorSubject<Product[]>([])
  productSource = new BehaviorSubject<Product>({ 
    id: "null",
    name: "null",
    quantity: 0,
    purchasePrice: 1,
    salePrice: 2,
    availble: true
  })
  
  newProduct = this.productSource.asObservable()
  updateProduct = this.modifyProduct.asObservable()

  constructor(){
    this.localProducts = localStorage.getItem("products")
    if(this.localProducts === null){
        this.products = []
      }else{
      this.products = JSON.parse(this.localProducts)
    } 
  }

  insertProductFunctuion(product:Product){
    this.products.push(product)
    localStorage.setItem("products", JSON.stringify(this.products))
    alert(product.name + " Add Successfully")
  }
  modifyProductFunction(product:Product, indexNumber: number){
    this.products[indexNumber].id = product.id;
    this.products[indexNumber].name = product.name;
    this.products[indexNumber].quantity = product.quantity;
    this.products[indexNumber].purchasePrice = product.purchasePrice;
    this.products[indexNumber].salePrice = product.salePrice;
    localStorage.setItem("products", JSON.stringify(this.products))
    alert(product.name + " Update Successfully")
  }
  
  deleteProductFunction(index:number){
    this.products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(this.products))
  }
}
