import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Product } from 'src/app/Product';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-product-quantities',
  templateUrl: './product-quantities.component.html',
  styleUrls: ['./product-quantities.component.css']
})
export class ProductQuantitiesComponent implements OnInit {
  productList: Product[]
  productsQuantity : {name:string, value:number}[] = []
    view: [number, number] = [500, 300] //Size of chart [width, height]
    colorScheme: Color  = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: ["#DC143C", "#00FF00", "#BC8F8F", "#40E0D0"]
    }
    xAxis: Boolean = true
    yAxis: Boolean = true
    legendTitle: string = "Products"
    legendTitleMulti: string = 'Months'
    legendPosition: string = "right"
    legend: boolean = true
    showDataLabel: boolean = true //number on bars
    roundEdges: boolean = true
    showLegend: boolean = true;
    showLabels: boolean = true;
  
    gradient: boolean = false;
    isDoughnut: boolean = true;
  
  constructor(private SubjectInServices :SubjectServiceService) {
    this.productList = this.SubjectInServices.products
    for(var i = 0; i<this.productList.length; i++){
      var product = { 
        name:this.productList[i].name, 
        value:this.productList[i].quantity
      }
      this.productsQuantity.push(product)
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
