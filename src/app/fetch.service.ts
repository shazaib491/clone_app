import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map, tap } from "rxjs/operators";
import {Admin} from './admin';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }
  car: [];

   headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  posts(url: string, payload) {
    return this.http.post(`${environment.root_url}/${url}`,payload);
  }

  get(url): Observable<any> {
    return this.http.get<any>(`${environment.root_url}/${url}`);
  }



}
