import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { recipeservice } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeService:recipeservice,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() { 
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onaddtoShoppinglist(){
  this.recipeService.addIngredienttoShoppinglist(this.recipe.ingredients)
  }

  onEditRecipe(){
   this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
