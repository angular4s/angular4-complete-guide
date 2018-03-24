import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('A Test Recipe', 'This is simply a  test', 'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg'),
    new Recipe('Idly Recipe', 'This is simply a  test', 'http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/ogsdI7edccdbi.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
