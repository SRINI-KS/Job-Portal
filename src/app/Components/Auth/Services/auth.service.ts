import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url=environment.apiUrl
  constructor(private http:HttpClient) { }

  register(data:any){
   return this.http.post(`${this.url}api/auth/register`,data)
  }

  login(data:any){
    return this.http.post(`${this.url}api/auth/login`,data)
  }

  setEmail(email:string){
    sessionStorage.setItem('emailId',email);
  }
  getEmail(){
    return sessionStorage.getItem('emailId')
  }
  setUserId(userId:string){
    sessionStorage.setItem('userId',userId);
  }
  getUserId(){
    return sessionStorage.getItem('userId')
  }
  isLogin(){
    return this.getUserId() !=null
  }
}
