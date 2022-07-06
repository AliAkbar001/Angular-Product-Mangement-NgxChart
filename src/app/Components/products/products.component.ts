import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[]
  constructor() {
    this.products = [{
      sno: 1,
      name: "Pepsi",
      quantity: 200,
      purchasePrice: 25,
      salePrice: 30,
      availble: true,
    },{
      sno: 2,
      name: "lays",
      quantity: 150,
      purchasePrice: 40,
      salePrice: 50,
      availble: true,
    },{
      sno: 3,
      name: "Biscuits",
      quantity: 220,
      purchasePrice: 15,
      salePrice: 25,
      availble: true,
    },{
      sno: 4,
      name: "Candy",
      quantity: 400,
      purchasePrice: 2,
      salePrice: 3,
      availble: true,
    },{
      sno: 5,
      name: "Juices",
      quantity: 80,
      purchasePrice: 20,
      salePrice: 35,
      availble: true,
    },{
      sno: 6,
      name: "Cookies",
      quantity: 130,
      purchasePrice: 90,
      salePrice: 120,
      availble: true,
  }] 
}
  ngOnInit(): void {
  }
}
