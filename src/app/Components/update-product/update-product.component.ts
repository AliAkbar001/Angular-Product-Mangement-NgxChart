import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Product';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Input() update_product : Product 
  @Input() productIndex :number
 // @Output() updateProductEmit : EventEmitter<Product> = new EventEmitter()
  constructor(private SubjectInServices :SubjectServiceService) {}
  ngOnInit(): void {}
  handleSubmit(){
    this.SubjectInServices.modifyProductFunction(this.update_product, this.productIndex)
  // this.updateProductEmit.emit(this.update_product)
  }
}
