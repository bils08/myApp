import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { increment, decrement, reset } from './state/app.actions'
import { SelectAllPokemon, selectCounter } from './state/app.selectors';
import * as PokemonActions from './state/app.actions'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public counter$: Observable<number>;
  pokemon$ = this.store.pipe(select(SelectAllPokemon));
  public counter: Observable<number>;
  // this.store.pipe(map(state => mySelector(state)));

  public pokemons: Observable<any>;
  constructor(private store: Store<{ count: number, pokemon: any }>) {
    this.counter$ = store.select('count');
    this.pokemons = store.select('pokemon');
    this.counter = store.pipe(select('count'));
    this.store.dispatch(PokemonActions.getPokemon());
  }
  ngOnInit(): void {
  }

  public increment() {
    this.store.dispatch(increment());
    console.log(this.counter);
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }
}
