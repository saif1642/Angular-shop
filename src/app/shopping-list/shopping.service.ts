import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomato", 3)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
