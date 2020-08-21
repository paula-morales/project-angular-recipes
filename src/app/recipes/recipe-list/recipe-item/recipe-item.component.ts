import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  //it is receiving the "recipe" from the parent to display it (for loop)
  @Input() recipe: Recipe;

  //get the recipe selected when clicking
  //the envent emmiter won't pass any information so set it to <void>()
  //@Output() to be able to listen the event from outside
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelected() {
    this.recipeSelected.emit();
  }
}
