import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: true }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: true }) amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
