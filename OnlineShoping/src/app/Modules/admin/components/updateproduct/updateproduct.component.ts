import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private es: ProductService,private fb:FormBuilder) { }
  productForm=this.fb.group({
    
    productName:[],
    price:[],
    color:[],
    dimensions:[],
    specification:[],
    manufacturer:[],
    quantity:[],
    categoryId:[]})
  public products:any;
  ngOnInit(): void {
  }
  edit(productId:string) {
let id=parseInt(productId)
    this.products = this.es.getDataFromServer(id).subscribe(
      d=>{this.products=d;
      console.log(d)
      }
    )

    // this.productForm.setValue({

    //  productId : this.products.productsId,

    //   productName: this.products.productName,

    //   price: this.products.price,
    //   dimensions: this.products.dimensions,
    //   specification: this.products.specification,
    //   manufacturer: this.products.manufacturer,
    //   quantity: this.products.quantity,
    //   categoryId: this.products.categoryid,
    // })
  }
  updateProduct(){
    let updatedForm={
     

      productName: this.productForm.get("productName")?.value,

      price:this.productForm.get("price")?.value,
      color:this.productForm.get("color")?.value,
      dimensions:this.productForm.get("dimensions")?.value,
      specification:this.productForm.get("specification")?.value,
      manufacturer:this.productForm.get("manufacturer")?.value,
      quantity:this.productForm.get("quantity")?.value,
      categoryId:this.productForm.get("categoryId")?.value,
    }
this.es.updateDataToServer(this.productForm.value).subscribe(
  d=>{
    console.log(d)
    alert("Data Added Successfully")
  }
)
  }
}
