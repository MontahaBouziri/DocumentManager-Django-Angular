import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BureauOrdreService {

  private baseUrl="http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }

  getBureauOrdres() : Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/bureauOrdre/')  }


  postOneBureau(data:any): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl+'/bureauOrdre/',data)
  }
}
