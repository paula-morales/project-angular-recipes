import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  //to get access to the activated route
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    //to access to the params in the router
    private router: Router
  ) {}

  ngOnInit(): void {
    //we can react to any changes in our route params
    this.route.params.subscribe((params: Params) => {
      //+ to convert into a number
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngToShoppingList(this.recipe.ingredients);
  }

  editRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }
}
