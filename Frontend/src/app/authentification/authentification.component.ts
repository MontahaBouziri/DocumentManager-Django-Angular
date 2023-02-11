import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { TokenInterceptorService } from '../token-interceptor.service';
import { TokenStorageService } from '../token-storage.service';

// username
const nom_user = '';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'], 
  providers: [UserService]
})
export class AuthentificationComponent implements OnInit {
  
  isLoggedIn=false
  isLoggedFailed=false
  message='login failed'
  form!:FormGroup
  token!:string

  

  public input:any
  constructor(private cookie: CookieService,
              private authServ:AuthService,
              private router:Router,
              private tokenStoreServ:TokenStorageService) { }

  msg:any;

  //setCokkie
    //this.cookie.set("userid","12345")
    //this.cookie.set("usertypr","internal")
    //getCokkie
    //alert("user with id "+ this.cookie.get("userid")+ "successfully logged in")
  
  ngOnInit(): void {
    this.input = {
      username:'',
      password:''
    }

    
    

    //this.showMessage()
  }




  loginUser(){ 
    //console.log("login method called")
    this.authServ.PostLoginUser(this.input).subscribe(
    response=>{
      //alert('User '+this.input.username+ ' is logged in')
      //console.log(this.input.username)
      //this.tokenStorageServ.saveToken()
      

      this.tokenStoreServ.saveToken(response.access)
      this.tokenStoreServ.saveRefreshToken(response.refresh)
      this.tokenStoreServ.saveUser(response)
      this.isLoggedFailed=false
      this.isLoggedIn=true

      this.tokenStoreServ.saveUserName(this.input.username)

      console.log('access ',response.access)
      console.log('refresh ',response.refresh)
      //console.log(this.tokenStoreServ.saveToken(response))
      //console.log(this.tokenStoreServ.saveUser(response))



      // username
      //console.log('username: ',this.input.username)
      //window.sessionStorage.removeItem(nom_user);
      //window.sessionStorage.setItem(nom_user, this.input.username);
      //console.log('username aaaaaaaaaaaaaa : ',nom_user)


      
      //this.router.navigate(['/utilisateurs' ]);
      this.router.navigate(['/dashboard' ]);
    }

    
  )
}


/*
public getUsername(): string | null {
  return window.sessionStorage.getItem(nom_user);
  //return localStorage.getItem(TOKEN_KEY);
}*/










































/*
private setSession(authResult: { expiresIn: any; idToken: string; }) {
  const expiresAt = moment().add(authResult.expiresIn,'second');

  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}          

refreshToken() {
  this.authServ.refreshToken();
}

*/

  RegisterUser(){ 
    //console.log("login method called")
    this.authServ.PostRegisterUser(this.input).subscribe(
    response=>{
      alert('User'+this.input.username+ 'is registered')
    }
    
  ) 
  }

showMessage(){
  return this.authServ.getMessage().subscribe(data=>{
    this.msg=data
    console.log(this.msg)
    
  })
}
  












}

