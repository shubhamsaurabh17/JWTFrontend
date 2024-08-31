import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_Auth/AuthGuard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"user",
    component:UserComponent,
    pathMatch:"full",
    canActivate:[AuthGuard], data: { roles: ['User'] }
  },
  {
    path:"admin",
    component:AdminComponent,
    pathMatch:"full",
    canActivate:[AuthGuard], data: { roles: ['Admin'] }
  },
  {
    path:"forbidden",
    component:ForbiddenComponent,
    pathMatch:"full"
  },
  {
    path:"error",
    component:ErrorPageComponent,
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full"
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
