import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterHospitalComponent } from './register-hospital/register-hospital.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'registerHospital',component: RegisterHospitalComponent},
  {path: 'signin',component: SignInComponent},


  ];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    RegisterHospitalComponent,
    SignInComponent,
  ],

  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],


  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
