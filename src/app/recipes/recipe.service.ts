import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
//it will manage our recipes
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //you cannot get access from outside (private)
  private recipes: Recipe[] = [
    new Recipe(
      "Recipe 1",
      "This is the first recipe",
      "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg",
      [new Ingredient("tomatoes", 5), new Ingredient("pasta", 1)]
    ),
    new Recipe(
      "Recipe 2",
      "This is the first recipe",
      "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg",
      [new Ingredient("tomatoes", 5), new Ingredient("pasta", 1)]
    ),
  ];
  //inject shopping list service into the recipe service
  constructor(private shopListService: ShoppingListService) {}

  getRecipes() {
    //we get a copy of the array
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    //we get a copy of the array
    return this.recipes[index];
  }
  addIngToShoppingList(ingredients: Ingredient[]) {
    this.shopListService.addIngredients(ingredients);
  }
}
