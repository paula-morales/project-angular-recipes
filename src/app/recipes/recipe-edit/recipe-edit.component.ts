import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeServices: RecipeService
  ) {}

  ngOnInit(): void {
    //retrieve the id
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      //to check if we are editing an existing recipe or creating a new one
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl(),
      })
    );
  }
  get controls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }
  private initForm() {
    let recipeName = "";
    let recipeImg = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeServices.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.image;
      recipeDescription = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      image: new FormControl(recipeImg),
      description: new FormControl(recipeDescription),
      ingredients: recipeIngredients,
    });
  }
}
