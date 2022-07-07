import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Product';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products : Product[]
  // indexNumber: number
  // localProducts: string | null;
  // newProduct : Product
  
  constructor(private SubjectInServices :SubjectServiceService) {
  //  this.localProducts = localStorage.getItem("products")
  //  if(this.localProducts === null){
  //     this.products = []
  //   }else{
  //    this.products = JSON.parse(this.localProducts)
  //  } 
  //  this.SubjectInServices. listOfProductsFunction(this.products)
  }
  ngOnInit(): void {
    // this.SubjectInServices.newProduct.subscribe((e)=> this.newProduct = e)
    // this.newProduct.id !== "null" && this.products.push(this.newProduct)
    // this.newProduct.id !== "null" && localStorage.setItem("products", JSON.stringify(this.products))
  }

  // productIndex(index: number){
  //   this.indexNumber = index
  // }
  // modifyProduct(product:Product){
  //   this.products[this.indexNumber].id = product.id;
  //   this.products[this.indexNumber].name = product.name;
  //   this.products[this.indexNumber].quantity = product.quantity;
  //   this.products[this.indexNumber].purchasePrice = product.purchasePrice;
  //   this.products[this.indexNumber].salePrice = product.salePrice;
  //   localStorage.setItem("products", JSON.stringify(this.products))
  //   alert(product.name + " Update Successfully")
  // }
  // deleteProduct(index:number){
  //   this.products.splice(index, 1)
  //   localStorage.setItem("products", JSON.stringify(this.products))
  // }
}
