import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {path : '', redirectTo:'/authentification', pathMatch:'full' },
  {path : 'authentification', component: AuthentificationComponent },
  

  {path:'admin',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

