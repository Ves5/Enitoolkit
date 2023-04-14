import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  getData(path: string): Observable<any> {
    const apiUrl = Constants.API_ENDPOINT + path;
    return this.http.get<any>(apiUrl);
  }

  postRequest(path: string, params: HttpParams){
    const apiURL = Constants.API_ENDPOINT + path;
    return this.http.post(apiURL, null, { params });
  }
}
