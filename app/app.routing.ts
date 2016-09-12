import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import {DashboardComponent} from './main_components/dashboard.component'; 
import {AboutComponent} from './about/about.component';
import {AdminComponent} from './admin/admin.component';
import {PricingComponent} from './pricing/pricing.component';
import { CreateUserComponent } from "./unprotected/create-user.component";
import { SigninComponent } from "./unprotected/signin.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./shared/auth.guard";
import {LessonsComponent} from "./lessons/lessons.component";

const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'pricing', component: PricingComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
