import { Recipe } from "./recipe.model";

//it will manage our recipes
export class RecipeService {
  //you cannot get access from outside (private)
  private recipes: Recipe[] = [
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
  getRecipes() {
    //we get a copy of the array
    return this.recipes.slice();
  }
}
