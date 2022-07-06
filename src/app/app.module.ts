import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsChatComponent } from './Components/products-chat/products-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    AddProductsComponent,
    ProductsComponent,
    ProductsChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
