import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private ps:CategoriesService) { }
  public allCategories:any=[]
  ngOnInit(): void {
    
    this.ps.getAllCategoriesFromDatabase().subscribe(data=>{  
      
      this.allCategories=data;
    })
  }

}
