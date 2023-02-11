import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';

import { HttpClientModule ,HttpClientXsrfModule, HTTP_INTERCEPTORS} from '@angular/common/http'; 
import { TypeDocService } from './TypeDoc.service';
import { SharedService } from './shared.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocServiceService } from './doc-service.service';

//import { TokenInterceptorService } from './token-interceptor.service';
import { JwtInterceptor } from './jwt.interceptor';

import { ValidationServiceService } from './validation-service.service';
import { ControlMessageComponent } from './control-message/control-message.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ControlMessageComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [TypeDocService,SharedService,DocServiceService, ValidationServiceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
