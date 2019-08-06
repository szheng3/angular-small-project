import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {ShoppingListState} from 'src/app/store/shopping-list/shopping-list.state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;

  constructor(private slService: ShoppingListService, private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    // this.ingredients$ = this.store.select(ShoppingListState.getShoppingList);
    this.ingredients$ = this.activatedRoute.data.pipe(map(params => params['ingredient']));
    // this.ingredients = this.slService.getIngredients();
    // this.activatedRoute.data.subscribe(value => {
    //     this.ingredients = value['ingredient'];
    //   },
    // );
    // this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   },
    // );
  }

}
