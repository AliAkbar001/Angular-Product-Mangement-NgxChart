import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ProductQuantitiesComponent } from './Components/product-quantities/product-quantities.component';
import { ProfitProductsComponent } from './Components/profit-products/profit-products.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';

const routes: Routes = [
  {path:'', component: ViewProductsComponent},
  {path:'add-product', component: AddProductsComponent},
  {path:'profit-products', component: ProfitProductsComponent},
  {path:'product-quantites', component: ProductQuantitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
