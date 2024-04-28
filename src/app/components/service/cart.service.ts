import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart$ = new BehaviorSubject<any[]>([]);//my globally available Cart

  private cartAr:any[] = [];

  constructor(private http: HttpClient) {
  }

  public addToCart(prod: any)
  {
    this.cartAr.push(prod);
    this.cart$.next(this.cartAr);
  }

  public cleanCart() {
    this.cartAr = [];
    this.cart$.next(this.cartAr);
  }

  finalize(products: any) : Observable<any> {
    return this.http.post(`${environment.backendUrl}/v1/checkout`, {
      products: products
    })
  }
}
