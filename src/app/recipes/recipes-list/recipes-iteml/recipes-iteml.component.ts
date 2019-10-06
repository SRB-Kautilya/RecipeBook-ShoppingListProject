import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../Recipe.model';

@Component({
  selector: 'app-recipes-iteml',
  templateUrl: './recipes-iteml.component.html',
  styleUrls: ['./recipes-iteml.component.css']
})
export class RecipesItemlComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() index:number;
  

  ngOnInit() {
  }


}
