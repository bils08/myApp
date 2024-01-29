import { ApplicationConfig, effect, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { StoreModule, provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './state/reducer';
import { provideEffects } from '@ngrx/effects';
import { FeatureEffects } from './state/app.effect';
import { selectCounter } from './state/app.selectors';
import { counterReducer } from './state/reducer/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,  
      StoreModule.forRoot({counter: counterReducer})  
    ),
    provideNoopAnimations(),
    provideStore(reducers, { metaReducers }),
    provideEffects(FeatureEffects)
  ]
};
