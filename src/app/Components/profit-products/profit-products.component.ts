import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Product } from 'src/app/Product';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-profit-products',
  templateUrl: './profit-products.component.html',
  styleUrls: ['./profit-products.component.css']
})
export class ProfitProductsComponent implements OnInit {
  productList: Product[]
  productsProfit : {name:string, value:number}[] = []
  productsPrices : {
    name:string, 
    series:{
      name:string, 
      value: number
    }[]}[] = []
    view: [number, number] = [500, 300] //Size of chart [width, height]
    colorScheme: Color  = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: ["#DC143C", "#00FF00", "#BC8F8F", "#40E0D0"]
    }
    colorSchemeTwo: Color  = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: ["#6495ED", "#00FFFF"]
    }
    xAxis: Boolean = true
    yAxis: Boolean = true
    legendTitle: string = "Products"
    legendTitleMulti: string = 'Months'
    legendPosition: string = "right"
    legend: boolean = true
    showDataLabel: boolean = true //number on bars
    roundEdges: boolean = true
  constructor(private SubjectInServices :SubjectServiceService) {
    this.productList = this.SubjectInServices.products
    for(var i = 0; i<this.productList.length; i++){
      var product = { 
        name:this.productList[i].name, 
        value:this.productList[i].salePrice - this.productList[i].purchasePrice 
      }
      var prices = {
        name: this.productList[i].name,
        series:[{
          name:"Purchase Price",
          value:this.productList[i].purchasePrice
        },{
          name:"Sale Price",
          value:this.productList[i].salePrice
        }]
      }
      this.productsProfit.push(product)
      this.productsPrices.push(prices)
    }
   }
  ngOnInit(): void {}
  onSelect(data: any){
   //alert("Select " + JSON.stringify(data)) 
  }
  onDeactivate(data: any){
  // alert("Deactivate " + JSON.stringify(data)) 
  }
  onActive(data: any){ 
    //alert("Active " + JSON.stringify(data)) 
  }
}
