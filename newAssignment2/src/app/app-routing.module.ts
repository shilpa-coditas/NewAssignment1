import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{
  path:'',redirectTo:'authorization',
  pathMatch: 'full'
},
{
  path: 'authorization',
  
  loadChildren:'./authentiction/authentiction.module#AuthentictionModule'
}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
