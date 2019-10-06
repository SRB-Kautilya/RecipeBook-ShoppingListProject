import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class shoppingListService {
    ingredientsChanged = new Subject
   private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Grapes', 7)
      ];

      getShoppinglist() {
        return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice()); 
      }

      addIngredients(ingredients:Ingredient[]){
       this.ingredients.push(...ingredients)
       this.ingredientsChanged.next(this.ingredients.slice())
      }
      
} 