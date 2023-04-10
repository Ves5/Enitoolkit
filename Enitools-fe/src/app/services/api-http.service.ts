import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
