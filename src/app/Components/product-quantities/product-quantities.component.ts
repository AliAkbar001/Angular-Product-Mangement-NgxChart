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
        value: 100
      },{
        name:"Wednesday",
        value: 330
      },{
        name:"Thursday",
        value: 40
      },{
        name:"Sunday",
        value: 700
      }]
    },{
      name:"Years",
      series:[{
        name:"January",
        value: 310
      },{
        name:"Faburay",
        value: 208
      },{
        name:"March",
        value: 30
      },{
        name:"May",
        value: 731
      },{
        name:"June",
        value: 30
      }]
    },{
      name:"Book",
      series:[{
        name:"January",
        value: 910
      },{
        name:"Faburay",
        value: 428
      },{
        name:"March",
        value: 30
      },{
        name:"May",
        value: 731
      },{
        name:"June",
        value: 30
      }]
    }]
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
