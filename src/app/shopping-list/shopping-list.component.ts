import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../../app/shared/ingredient.model";
import { ShoppingService } from "./shopping.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private isChangeSub: Subscription;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.isChangeSub = this.shoppingService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  OnDestroy() {
    this.isChangeSub.unsubscribe();
  }
}
