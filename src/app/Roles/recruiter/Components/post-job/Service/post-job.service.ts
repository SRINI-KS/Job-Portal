import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostJobService {
url=environment.apiUrl
  constructor(private http:HttpClient){}

  postJobRequest(data:any){
    return this.http.post(`${this.url}postJob`,data)
  }

}
