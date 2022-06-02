import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';

import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomersComponent,
    OrdersComponent,
    CategoriesComponent,
    ProductsComponent,
    
    AddproductsComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
