import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ProductsChatComponent } from './Components/products-chat/products-chat.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'add-product', component: AddProductsComponent},
  {path:'product-chart', component: ProductsChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
