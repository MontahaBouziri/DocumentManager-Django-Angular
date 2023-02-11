import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { JwtInterceptor } from './jwt.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl= "http://127.0.0.1:8000"
  //httpHeaders = new HttpHeaders({'Content-Type':'application/json;' }) ;
  public headers_object = new HttpHeaders({'Content-Type':'application/json;' }).set("Authorization", "acf7568bde0d4dd78c19b99128354c1aaf95bf57 "  );

//intercept



    // http options used for making API calls
    private httpOptions: any;
 
    // the actual JWT token
    public token: string | undefined;
   
    // the token expiration date
    public token_expires: Date | undefined;
   
    // the username of the logged in user
    public username: string | undefined;
   
    // error messages received from the login attempt
    public errors: any = [];
  
  


 


  constructor(private http:HttpClient,
              private TokenStoreServ:TokenStorageService,
              private interceptServ:TokenInterceptorService,) { 

                
    //this.interceptServ.intercept()
    this.httpOptions = {
      
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    //this.token = this.TokenStoreServ.getToken()


  } 

  

  PostLoginUser(user:any):Observable<any> {
    return this.http.post(this.baseurl+'/token/',user, this.httpOptions)

   }


     // Refreshes the JWT token, to extend the time the user is logged in
 
















   getMessage():Observable<any> {
    return this.http.get(this.baseurl+'/token/', this.httpOptions)
  }

  PostRegisterUser(data:any):Observable<any[]> {
    return this.http.post<any[]>(this.baseurl+'/users/',this.headers_object)
   }



































   /*
  getUser():Observable<any[]> {
    return this.http.get<any[]>(this.baseurl+'/users/')
  }
  */ 
  

   //let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
  // READ the token from localstorage and Deserialize
  // STORE the token in localstore:
/*
setToken(token:string){

  // First, serialize it (but just if token is not string type).
  const tokenString:string = JSON.stringify( token );

  localStorage.setItem('token', tokenString);
}

getToken(): string | null{
 
  let token = localStorage.getItem( 'token' );

  if( token !=null){

      // You just need to parse if you serialized it inside setToken() method
      token = JSON.parse(token);
 }

 return token;

}

*/

 // return this.http.post<any[]>(this.baseurl+'/users/',{headers: new HttpHeaders().set('Authorization', 'my-auth-token')})

}
