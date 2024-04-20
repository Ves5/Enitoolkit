import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  getData(path: string, params?: HttpParams): Observable<any> {
    const apiUrl = environment.apiUrl + path;
    return this.http.get<any>(apiUrl, { params });
  }

  postRequest(path: string, params: HttpParams){
    const apiURL = environment.apiUrl + path;
    return this.http.post(apiURL, null, { params });
  }
}
