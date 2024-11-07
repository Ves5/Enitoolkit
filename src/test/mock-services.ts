import { HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"

export class MockApiHttpService {
    // fake methods go here
    getData(path: string, params?: HttpParams) :Observable<any> {return new Observable()}
    postRequest(path: string, params: HttpParams) :Observable<any> {return new Observable()}
}
