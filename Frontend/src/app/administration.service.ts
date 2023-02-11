import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  private baseurl= "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json;' }) ; 



  getAllAdministrations(): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/administration/');
  }

  getOneAdministration(id: any): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/administration/'+ id + '/');
  }


  postOneAdministration(data:any): Observable<any[]> { 
    // Simple POST request with a JSON body and response type <any>
    return this.http.post<any[]>(this.baseurl +'/administration/',data )
  
  }


  updateOneAdministration(idtype:any, data:any): Observable<any[]> { 
    // Simple put request with a JSON body and response type <any>

    return this.http.put<any[]>(this.baseurl +'/administration/'+idtype +'/', data )
  
  }

  deleteOneAdministration(id_type:any): Observable<any> {
    return this.http.delete(this.baseurl +'/administration/'+id_type +'/');
  }
}
