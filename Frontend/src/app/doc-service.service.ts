import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Typedocument } from './admin/documents/typedocuments.component';
@Injectable({
  providedIn: 'root'
})
export class DocServiceService {

  private baseurl= "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json;' }) ; 
  constructor(private http: HttpClient) { }

  getAllDocs(): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/documents/');
  }

  getOneDoc(id: string): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/documents/'+ id + '/');
  }


  postOneDoc(data:any): Observable<any[]> { 
    // Simple POST request with a JSON body and response type <any>
    return this.http.post<any[]>(this.baseurl +'/documents/', data )
  
  }


  putOneDoc(id_doc:string , data:any): Observable<any[]> { 
    // Simple put request with a JSON body and response type <any>
    return this.http.put<any[]>(this.baseurl+'/documents/'+id_doc +'/', data )
  
  }

  deleteOneDoc(id_doc:any):Observable<any> {
    return this.http.delete(this.baseurl+'/documents/'+id_doc+'/');
  }
  
}
