import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';
const USER_NAME_KEY = 'username';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router:Router) { }
  
  signOut(){
    window.sessionStorage.clear()
    this.router.navigate(['/authentification' ]);
  }

  saveToken(jwt: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, jwt);

    //localStorage.removeItem(TOKEN_KEY)
    //localStorage.setItem(TOKEN_KEY,jwt)

  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
    //return localStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log(user)
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};


  }


  public saveUserName(UserName:any):any { 
    window.sessionStorage.removeItem(USER_NAME_KEY);
    window.sessionStorage.setItem(USER_NAME_KEY, UserName );
    console.log(UserName)
    console.log(USER_NAME_KEY)
  }

  public getUserName(): any {
    return window.sessionStorage.getItem(USER_NAME_KEY);
  }
}
