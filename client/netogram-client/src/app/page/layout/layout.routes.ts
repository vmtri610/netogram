import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";
import {ProfileComponent} from "./profile/profile.component";

export const LAYOUT_ROUTES: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile/:uid',
        component: ProfileComponent
      },
      {
        path: '',
        loadChildren: () => import('./main/main.routes').then(m => m.MAIN_ROUTES)
      }

      ]
  }
  ];
