import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { routing } from './auth.routing';

//import { AuthGuard } from '../guards/auth.gard';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: []
})
export class AuthModule { }
