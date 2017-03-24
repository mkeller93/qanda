import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '*',
    children: []
  },
  {
    path: "auth",
    loadChildren: './auth/auth.module#AuthModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
