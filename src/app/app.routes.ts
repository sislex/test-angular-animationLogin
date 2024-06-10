import { Routes } from '@angular/router';
import {AuthContainerComponent} from "../../projects/web/src/lib/containers/auth.container/auth.container.component";
import {
  DashboardContainerComponent
} from "../../projects/web/src/lib/containers/dashboard.container/dashboard.container.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
  },

  {
    path: 'dashboard',
    component: DashboardContainerComponent,
  },
];
