import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  products : Product[] = [{
      id: "1",
      name: "Juice",
      quantity: 120,
      purchasePrice: 25,
      salePrice: 30,
      availble: true
    },{
      id: "2",
      name: "Pepsi",
      quantity: 150,
      purchasePrice: 45,
      salePrice: 60,
      availble: true
    },{
      id: "3",
      name: "Lays",
      quantity: 90,
      purchasePrice: 25,
      salePrice: 40,
      availble: true
    },{
      id: "4",
      name: "Biscuit",
      quantity: 110,
      purchasePrice: 15,
      salePrice: 25,
      availble: true
    },{
      id: "5",
      name: "Cookies",
      quantity: 140,
      purchasePrice: 45,
      salePrice: 70,
      availble: true
  }]
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
    if(this.localProducts !== null){
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
