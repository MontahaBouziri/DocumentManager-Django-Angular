import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

//let TOKEN_HEADER_KEY = 'WWW-Authenticate:';
let TOKEN_HEADER_KEY = 'WWW-Authenticate';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwt:TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authReq = request
    const jwt= this.jwt.getToken();
    //console.log(jwt)
    if(jwt!=null) {
      authReq = request.clone({ headers: request.headers.set('Authorization','Bearer '+jwt)

       })

    }
    else{
      console.log('Hahahahahahahahahahah')
    };


    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi: true }
];


 /*
      console.log('jwt token mahouch null')
      console.log(jwt)
      authReq = request.clone({ 
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+jwt
        })
      })*/

      //authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY,`Bearer ${jwt}`)})

      /*
      authReq = request.clone({   
        setHeaders:{
          //Authorization: 'Bearer xx.yy.zz' //WWW-Authenticate: Bearer realm="api"
          Authorization: `Bearer ${jwt}`

        }
      })*/