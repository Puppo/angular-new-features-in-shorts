import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home-default-export',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./pages/post/post.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
