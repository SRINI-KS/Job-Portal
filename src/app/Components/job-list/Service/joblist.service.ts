import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoblistService {

  url = environment.apiUrl
  constructor(private http: HttpClient) { }

  getJobList() {
    return this.http.get(`${this.url}getJobList`)
  }
  getJobListById(id: any) {
    return this.http.get(`${this.url}getJobById/${id}`)
  }
}
