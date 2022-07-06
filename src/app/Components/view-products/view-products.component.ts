import { Component, Input, OnInit} from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
 update_product: Product;
@Input() products: Product[];
  constructor() { }
  ngOnInit(): void {
  }
  productUpdate(product:Product){
    this.update_product = product
  }
}
