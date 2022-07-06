import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
@Input() update_product : Product
  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(){

  }
  modifyProduct(product:Product){
   
  }
}
