import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl= "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json;' }) ;

  

  public headers_object = new HttpHeaders({'Content-Type':'application/json;' })
  constructor(private http:HttpClient) { } 


 

   getUsers():Observable<any> {
    return this.http.get(this.baseurl+'/users/')
  }


  getUser(id: string): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/users/'+ id + '/');
  }


  updateUser(id:any, data:any): Observable<any[]> { 
    // Simple put request with a JSON body and response type <any>

    return this.http.put<any[]>(this.baseurl +'/users/'+id + '/', data )
  
  }


  PostUser(data:any):Observable<any[]> {
    return this.http.post<any>(this.baseurl+'/users/',this.httpHeaders)
   }
  

  deleteUser(id:any): Observable<any> {
    return this.http.delete(this.baseurl +'/users/'+id +'/');
  }

 // return this.http.post<any[]>(this.baseurl+'/users/',{headers: new HttpHeaders().set('Authorization', 'my-auth-token')})


}
