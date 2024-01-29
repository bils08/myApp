import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as formFeature from './app.actions';
import { concatMap, map } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class FeatureEffects {
    constructor(private actions$: Actions, private auth: AuthService) {}

    getLists$ = createEffect(
        () => 
        this.actions$.pipe(
            ofType(formFeature.getPokemon),
            concatMap(action => 
                this.auth.getList()),
                map((data: any) => formFeature.retrievedPokemon({data}))
        )
    )
    
}