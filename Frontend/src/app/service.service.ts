import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseurl= "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json;' }) ; 
  public headers: HttpHeaders = new HttpHeaders();
  //headers = this.headers.append('Content-Type', 'application/json;')

  constructor(private http: HttpClient) { }

  getOneService(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl +'/service/'+ id + '/');

  }
  
  
  getServices():Observable<any[]>{
    return this.http.get<any[]>(this.baseurl+'/service/');
  }

  PostService(data:any):Observable<any[]> {
    return this.http.post<any[]>(this.baseurl+'/service/',data)
   }

   putOneService(id_serv:string , data:any): Observable<any[]> { 
    return this.http.put<any[]>(this.baseurl+'/service/'+id_serv +'/', data )
  
  }

  deleteService(idServ:any):Observable<any> {
    return this.http.delete(this.baseurl+'/service/'+idServ+'/');//XMLRequest error if u don't ad '/' at the end of url
  }
}
