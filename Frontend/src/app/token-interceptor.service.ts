import { Injectable, Injector } from '@angular/core';
import { Component, VERSION } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private jwt:TokenStorageService,
              private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //let TokenStoreServ = this.injector.get(TokenStorageService)
    let authReq = req
    const jwt= this.jwt.getToken();
    console.log(jwt)
    if(jwt!=null) {
      //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY,`Bearer ${TokenStoreServ.getToken()}`)})

    };
    return next.handle(authReq)
  }
  
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi: true }
];
