import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '*',
    children: []
  },
  {
    path: "auth",
    loadChildren: './components/auth/auth.module#AuthModule'
  },
  {
    path: "main",
    loadChildren: './components/main/main.module#MainModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
