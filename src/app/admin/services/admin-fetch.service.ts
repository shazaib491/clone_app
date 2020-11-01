import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminFetchService {

  constructor(private http: HttpClient) { }

  admin_post(uri: string,payload:any):Observable<any> {
    console.log(payload.getAll('banner'));
    var image=payload.getAll('banner');
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = { headers: headers, reportProgress: true  };
    return this.http.post<any>(`${environment.admin_url}/${uri}`,payload,options);
  }


}
// this.product.patchValue({
//   banner: file
// }
