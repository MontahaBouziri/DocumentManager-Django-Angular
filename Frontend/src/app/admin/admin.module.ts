import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BarsComponent } from './bars/bars.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { TypedocumentsComponent } from './typedocuments/typedocuments.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
//import { TypeDocService } from '../TypeDoc.service';
//import { TypeDetailsComponent } from './type-details/type-details.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { TypeDocService } from '../TypeDoc.service';
import { SharedService } from '../shared.service';
import { DocServiceService } from '../doc-service.service';
import { TokenInterceptorService } from '../token-interceptor.service';
import { JwtInterceptor } from '../jwt.interceptor';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { AdministrationComponent } from './administration/administration.component';
import { CompotestComponent } from './compotest/compotest.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

import { ValidationServiceService } from '../validation-service.service';
import { ControlMsgAdminComponent } from './control-msg-admin/control-msg-admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Highcharts from 'highcharts';
import { BureauOdreComponent } from './bureau-odre/bureau-odre.component'
@NgModule({
  declarations: [
    AdminComponent,
    BarsComponent,
    SidebarComponent,
    
    DocumentsComponent,
    DocumentDetailsComponent,
    TypedocumentsComponent,
    
    UtilisateursComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    ServiceComponent,
    ServiceDetailComponent,
    AdministrationComponent,
    CompotestComponent,
    AdminDetailsComponent,
    ControlMsgAdminComponent,
    DashboardComponent,
    BureauOdreComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    HighchartsChartModule,
    FlexLayoutModule,
    
   
  ],
  providers: [TypeDocService,SharedService,DocServiceService, ValidationServiceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
})
/*
@Directive({
  selector: '[attr]',
  exportAs:'ngForm'
})*/
export class AdminModule { }
