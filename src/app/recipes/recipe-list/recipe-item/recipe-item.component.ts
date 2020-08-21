import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  //it is receiving the "recipe" from the parent
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
