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
import { WhyGiveBloodComponent } from './why-give-blood/why-give-blood.component';
import { WhoGiveBloodComponent } from './who-give-blood/who-give-blood.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'registerHospital',component: RegisterHospitalComponent},
   {path: 'signin',component: SignInComponent},
   {path: 'whyGiveBlood',component: WhyGiveBloodComponent},
   {path: 'whoGiveBlood',component: WhoGiveBloodComponent},





  ];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    RegisterHospitalComponent,
    SignInComponent,
    WhyGiveBloodComponent,
    WhoGiveBloodComponent,
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
