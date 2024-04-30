import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  filter(filter: any = {}): Observable<Object> {
    return this.http.post(`${environment.backendUrl}/v1/public/product/filter`, filter)
  }
}
