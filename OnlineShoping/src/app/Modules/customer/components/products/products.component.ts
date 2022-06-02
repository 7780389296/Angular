import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ps:ProductService) { }
  public allProducts:any=[]
  ngOnInit(): void {
    this.ps.getAllProductsFromDatabase().subscribe(d=>{  
      this.allProducts=d;
    })
  }

}
