import { Recipe } from "../recipes/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "This is Recipe One",
      "dummy Recipe text",
      "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg",
      [new Ingredient("Meat", 2), new Ingredient("Potato", 5)]
    ),
    new Recipe(
      "This is Recipe Two",
      "Recipe text",
      "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg",
      [new Ingredient("Salt", 2), new Ingredient("Mirchi", 5)]
    )
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
