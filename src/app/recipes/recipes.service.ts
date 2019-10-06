import { Injectable } from "@angular/core";
import { Recipe } from "./Recipe.model"; 
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list-service";

@Injectable()
export class recipeservice {
    private recipes: Recipe[] = [
        new Recipe('Ratatouille Pasta', 'FOOD STYLING BY OLIVIA MACK MCCOOL',
         'https://assets.bonappetit.com/photos/5d4356436f98a4000898782b/1:1/w_1600%2Cc_limit/Basically-Ratatouille-Pasta.jpg', 
         [
           new Ingredient('Meat', 1),
           new Ingredient('French Fries', 2)
         ]),
        new Recipe('Indian Food', 'Gate way to indian Restaurent', 'https://gatewaytoindiarestaurant.biz/wp-content/uploads/2018/12/chicken-1.jpg',
        [
          new Ingredient('Papad', 0.5),
          new Ingredient('sweet', 1)
        ])
      ];

      constructor(private slService:shoppingListService){}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index:number) {
        return this.recipes[index]

      }
      addIngredienttoShoppinglist(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients);
      }
}