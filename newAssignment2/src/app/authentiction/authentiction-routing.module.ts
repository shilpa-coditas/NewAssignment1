import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path : '', redirectTo: 'home',
  pathMatch: 'full'
 },
{
  path: 'home', component: HomeComponent
},
{
  path: 'signup',component:SignupComponent
},
{
  path: 'signin', component:SigninComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentictionRoutingModule { }
