import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-products-chat',
  templateUrl: './products-chat.component.html',
  styleUrls: ['./products-chat.component.css']
})
export class ProductsChatComponent implements OnInit {
  productList: Product[]
  constructor(private SubjectInServices :SubjectServiceService) {
    //this.SubjectInServices.listProduct.subscribe((e) => this.productList = e)
   }

  ngOnInit(): void {}

}
