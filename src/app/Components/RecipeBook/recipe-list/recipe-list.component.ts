import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is just a test', 'http://worldartsme.com/images/cookbooks-for-free-recipe-clipart-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
