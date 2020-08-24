import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeServices: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipeServices.getRecipes();
    this.http
      .put("https://new-project-f7eee.firebaseio.com/recipes.json", recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    //response Recipe[]
    //map is a rxjs operator
    this.http
      .get<Recipe[]>("https://new-project-f7eee.firebaseio.com/recipes.json")
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((recipes) => {
        this.recipeServices.setRecipes(recipes);
      });
  }
}
