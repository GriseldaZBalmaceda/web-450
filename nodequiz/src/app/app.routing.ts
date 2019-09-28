import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component:LoginComponent,
    children: [
      /*
        New components go here...
       */
    ]
  }
];
