import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../admin/components/orders/orders.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { DeleteProductsComponent } from './components/delete-products/delete-products.component';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'',component:CustomerDashboardComponent,children:[
    { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'cart', component: CartComponent },
      { path: '', redirectTo: '/customer/home', pathMatch: 'full' },
     {path:"addP",component:AddProductComponent},
     {path:'delp',component:DeleteProductsComponent},
     
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
