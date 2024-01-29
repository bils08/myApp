import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { counterReducer } from "./app.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    count: counterReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];