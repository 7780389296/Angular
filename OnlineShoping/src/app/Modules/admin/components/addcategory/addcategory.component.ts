import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private rs:CategoriesService,private fb:FormBuilder) { }
  simpleForm=this.fb.group({
    
    categoryName:[]
    
  })
  ngOnInit(): void {
  }
  public responce:any;
  submit(){
    let category={
      categoryName:this.simpleForm.get("categoryName")?.value

      
    }
    this.rs.addDataToServer(category).subscribe(
      data=>{
        this.responce=data;
        console.log(data);
        alert("data added")
      }
    )
  }

}
