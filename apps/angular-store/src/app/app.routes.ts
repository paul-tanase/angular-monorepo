import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: 'home',
        component: NxWelcomeComponent,
    },
    {
        path: 'products',
        loadComponent: () => import('@angular-monorepo/products').then((m) => m.ProductsComponent),
    },
  {
    path: 'orders',
    loadComponent: () =>
      import('@angular-monorepo/orders').then((m) => m.OrdersComponent),
  },
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NxWelcomeComponent,
  },
];
