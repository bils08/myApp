// app.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as featurePokemon from './reducer/app.reducer';

//
export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCounter = createSelector(
  selectCounterState,
  (state) => state
);
//

export const selectPokemonState = 
createFeatureSelector<featurePokemon.PokemonState>('data');

export const SelectAllPokemon = createSelector(
  selectPokemonState,
  featurePokemon.selectAll
)

