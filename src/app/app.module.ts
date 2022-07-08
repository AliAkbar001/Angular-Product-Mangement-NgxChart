import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfitProductsComponent } from './Components/profit-products/profit-products.component';
import { ProductQuantitiesComponent } from './Components/product-quantities/product-quantities.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    AddProductsComponent,
    ProductsComponent,
    UpdateProductComponent,
    ProfitProductsComponent,
    ProductQuantitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
