import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(formData: any) : Observable<any> {
    return this.http.post(`${environment.backendUrl}/login`, formData)
  }

  register(body: any) : Observable<any> {
    return this.http.post(`${environment.backendUrl}/v1/public/users`, body)
  }
}
