import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
//import { Typedocument } from './admin/typedocuments/typedocuments.component';
@Injectable({
  providedIn: 'root'
})
export class TypeDocService {

    










  private baseurl= "http://127.0.0.1:8000"
  constructor(private http: HttpClient,
              private jwt:TokenStorageService) { }

  
  httpHeaders = new HttpHeaders({'Content-Type':'application/json', 
                                 'Authorization': `Bearer ${this.jwt.getToken()}` }) ; 









  getAllTypeDocs(): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/typedocuments/');
  }

  getOnetype(id: string): Observable<any[]> { 
    return this.http.get<any[]>(this.baseurl +'/typedocuments/'+ id + '/');
  }


  postOnetype(data:any): Observable<any[]> { 
    // Simple POST request with a JSON body and response type <any>
    return this.http.post<any[]>(this.baseurl +'/typedocuments/', data )
  
  }


  updateOnetype(idtype:any, data:any): Observable<any[]> { 
    // Simple put request with a JSON body and response type <any>

    return this.http.put<any[]>(this.baseurl +'/typedocuments/'+idtype, data )
  
  }

  deleteOneType(id_type:any): Observable<any> {
    return this.http.delete(this.baseurl +'/typedocuments/'+id_type +'/');
  }
  
}
