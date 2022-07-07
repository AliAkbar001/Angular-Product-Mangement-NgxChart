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
  listText = [{
    name:"Apple",
    value: 900
  },{
    name:"Orange",
    value: 600
  },{
    name:"Banana",
    value: 700
  },{
    name:"Pomigarnate",
    value: 1000
  }]
  nestedListText = [{
      name:"Weeks",
      series:[{
        name:"Monday",
        value: 1
      },{
        name:"Wednesday",
        value: 3
      },{
        name:"Thursday",
        value: 4
      },{
        name:"Sunday",
        value: 7
      }]
    },{
      name:"Years",
      series:[{
        name:"January",
        value: 31
      },{
        name:"Faburay",
        value: 28
      },{
        name:"March",
        value: 30
      },{
        name:"May",
        value: 31
      },{
        name:"June",
        value: 30
      }]
    }]
  constructor(private SubjectInServices :SubjectServiceService) {
    this.productList = this.SubjectInServices.products
   }

  ngOnInit(): void {}

}
