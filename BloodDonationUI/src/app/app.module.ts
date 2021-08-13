import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "",
    redirectTo: '/first',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
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
