import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../app.actions';
import * as PokemonActions from "../app.actions";
import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";

export interface PokemonState extends EntityState<any> {
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({})

export const initialStatePoke: PokemonState = adapter.getInitialState({
  loading: true,
  error: ''
})

export const feautureReducer = createReducer(
  initialStatePoke,
  on(PokemonActions.retrievedPokemon, (state, {data}) => {
    return adapter.addMany(data, state);
  })
)

export const {selectAll} = adapter.getSelectors();

//
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);
