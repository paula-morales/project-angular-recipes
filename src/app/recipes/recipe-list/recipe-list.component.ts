import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  //Event emitter : I pass the recipe as a type and the recipe it was selected
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Recipe 1",
      "This is the first recipe",
      "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg"
    ),
    new Recipe(
      "Recipe 2",
      "This is the second recipe",
      "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg"
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
