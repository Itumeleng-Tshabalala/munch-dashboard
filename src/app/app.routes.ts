import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./orders/orders.component').then((m) => m.OrdersComponent),
  },
  {
    path: 'in-progress',
    loadComponent: () =>
      import('./in-progress/in-progress.component').then(
        (m) => m.InProgressComponent
      ),
  },
  {
    path: 'completed',
    loadComponent: () =>
      import('./completed/completed.component').then(
        (m) => m.CompletedComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.component').then((m) => m.SettingsComponent),
  },
];
