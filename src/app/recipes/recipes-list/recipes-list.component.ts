import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { recipeservice } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeservice: recipeservice,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo:this.route})
  }
}
