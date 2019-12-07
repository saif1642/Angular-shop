import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipes/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "This is Recipe One",
      "dummy Recipe text",
      "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"
    ),
    new Recipe(
      "This is Recipe Two",
      "Recipe text",
      "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
