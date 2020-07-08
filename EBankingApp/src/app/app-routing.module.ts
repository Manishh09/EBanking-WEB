import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'signup', component: SignupComponent,
    canActivate:[AuthGuard]
  },
  { path: 'login', component: LoginComponent  },
  {
    path: 'customer-details', component: CustomerDetailsComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
