import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Admin } from './admin';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fetch: FetchService,private router:Router) { }
  authToken: any;
  user: any;
  register(payload) {
    return this.fetch.posts('register', payload);
  }
  image(payload){

    return this.fetch.posts('addItem',payload);
  }

  login(payload) {
    return this.fetch.posts('verify', payload);
    this.router.navigate(['/dahsboard']);
    if (payload.email !== '' && payload.password !== '' ) { // {3}
     this.router.navigate(['/']);
  }}
  setToken(token) {
    localStorage.setItem('AuthToken', token);
    console.log(token);
  }
  storeUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getdata() {

    this.user =JSON.parse(localStorage.getItem('user'));
    return this.user;
  }

  loadtoken() {
    const token = localStorage.getItem('AuthToken');
    return token;
  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  profile() {
    return this.fetch.get('profile');
  }

  getData() {
    return this.fetch.get('getUser');
  }

  getUserPayload(){
    var token=this.loadtoken();
    if(token){

      var userPayload=atob(token.split('.')[1]);
      let res= JSON.parse(userPayload)

      return JSON.parse(userPayload)
    }
    else
    {
      return  null;
    }
  }
isLoggedIn(){
  var userPayload=this.getUserPayload();
  if(userPayload){
    return userPayload.exp > Date.now() /1000;
  }
  else
  {
      return false;
  }
}


}
