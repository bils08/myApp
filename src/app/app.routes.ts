import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    { path: 'pokemon', component: ListsComponent },
    { path: 'pokemon/:id', component: DetailComponent },
];
