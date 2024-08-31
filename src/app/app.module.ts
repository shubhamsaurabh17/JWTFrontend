import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './_Auth/AuthInterceptor';
import { ErrorPageComponent } from './error-page/error-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    LoginComponent,
    ErrorPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
