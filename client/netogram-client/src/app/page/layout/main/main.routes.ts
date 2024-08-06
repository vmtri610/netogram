import {Routes} from "@angular/router";
import {MainComponent} from "./main.component";

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES)
      },
      {
        path: 'friends',
        loadChildren: () => import('./friends/friends.routes').then(m => m.FRIENDS_ROUTES)
      },

    ]
  }
];
