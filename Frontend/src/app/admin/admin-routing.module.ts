import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentsComponent } from './documents/documents.component';
import { TypedocumentsComponent } from './typedocuments/typedocuments.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin.component';
//import { TypeDetailsComponent } from './type-details/type-details.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { AdministrationComponent } from './administration/administration.component';
import { CompotestComponent } from './compotest/compotest.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { ControlMsgAdminComponent } from './control-msg-admin/control-msg-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/auth.guard';
import { BureauOdreComponent } from './bureau-odre/bureau-odre.component';

const routes: Routes = [
    {path : '', redirectTo:'/admin/documents', pathMatch:'full' },

    {path : '', component: AdminComponent , children: [ 

      
    {path : 'documents', component: DocumentsComponent , canActivate : [AuthGuard]},
    {path : 'typedocuments/:id/:id_doc', component: DocumentDetailsComponent , canActivate : [AuthGuard] },
    {path : 'typedocuments', component: TypedocumentsComponent , canActivate : [AuthGuard]},
    {path : 'typedocuments/:id', component: DocumentsComponent , canActivate : [AuthGuard]},

    //{path : 'typedocuments/fadit', component: TypeDetailsComponent },//typedocuments/:id_type/updateType

    {path : 'utilisateurs', component: UtilisateursComponent , canActivate : [AuthGuard]},
    {path : 'utilisateurs/:id', component: UserDetailsComponent , canActivate : [AuthGuard] },
    {path : 'service', component: ServiceComponent , canActivate : [AuthGuard]},
    {path : 'service/:id_serv', component: ServiceDetailComponent , canActivate : [AuthGuard]},
    {path : 'organisme', component: AdministrationComponent , canActivate : [AuthGuard]},
    {path : 'organisme/:id', component: AdminDetailsComponent , canActivate : [AuthGuard]},


    {path : 'test', component: CompotestComponent , canActivate : [AuthGuard]},
    {path : 'dashboard', component: DashboardComponent , canActivate : [AuthGuard]},
    {path : 'bureauOrdre', component: BureauOdreComponent , canActivate : [AuthGuard]},

    {path : "**", component: PageNotFoundComponent , canActivate : [AuthGuard] },
    
    



    ]         },
    
    
    
    ]
   
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
/*export const routingConponents = [ DocumentsComponent, 
  TypedocumentsComponent ,
  UtilisateursComponent,
  DocumentDetailsComponent, 
  UserDetailsComponent,
  //HomeComponent,
  PageNotFoundComponent , ]*/