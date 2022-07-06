import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Input() update_product : Product
  @Output() updateProductEmit : EventEmitter<Product> = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }
  handleSubmit(){
   this.updateProductEmit.emit(this.update_product)
  }
}
