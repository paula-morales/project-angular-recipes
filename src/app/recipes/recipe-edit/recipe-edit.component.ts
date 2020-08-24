import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
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

  private initForm() {
    let recipeName = "";
    let recipeImg = "";
    let recipeDescription = "";

    if (this.editMode) {
      const recipe = this.recipeServices.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.image;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      image: new FormControl(recipeImg),
      description: new FormControl(recipeDescription),
    });
  }
}
