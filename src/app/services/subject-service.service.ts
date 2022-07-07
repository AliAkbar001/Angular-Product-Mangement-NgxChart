import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  private productSource = new BehaviorSubject<Product>({ 
    id: "null",
    name: "null",
    quantity: 0,
    purchasePrice: 1,
    salePrice: 2,
    availble: true
  })
  newProduct = this.productSource.asObservable()
    constructor() { }
    updateProductList(product:Product){
      this.productSource.next(product)
    }
}
