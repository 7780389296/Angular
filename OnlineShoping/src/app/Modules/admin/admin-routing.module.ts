import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:[
    { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'customers', component: CustomersComponent },
      
     {path:'addproduct',component:AddproductsComponent},
      {path:'updateproduct',component:UpdateproductComponent},
      {path:'deleteproduct',component:DeleteproductComponent},
      {path:'addcategory',component:AddcategoryComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
