import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //retrieve the id
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      //to check if we are editing an existing recipe or creating a new one
      this.editMode = params["id"] != null;
    });
  }
}
