import { Component, OnInit } from '@angular/core';
import { recipeservice } from './recipes.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[recipeservice]
})
export class RecipesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
