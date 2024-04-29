import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SecurityUtils} from "../../pages/utils/security-utils";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart$ = new BehaviorSubject<any[]>([]);//my globally available Cart
  public user$ = new BehaviorSubject<any>(null);


  private cartAr:any[] = [];
  private userAr: any = null;
  private sessionCart = 'cart';
  private sessionUser = 'user';

  constructor(private http: HttpClient) {
  }

  public addUser(user: any) {
    this.userAr = user;
    this.user$.next(this.userAr);
    this.saveUser(this.userAr);
  }

  public addToCart(prod: any)
  {
    this.cartAr.push(prod);
    this.cart$.next(this.cartAr);
    this.saveCart(this.cartAr);
  }

  public loadCart() {
    if (window.sessionStorage.getItem(this.sessionCart) != null) {
      this.cartAr = JSON.parse(window.sessionStorage.getItem(this.sessionCart) ?? "") as [] ?? [];
      this.cart$.next(this.cartAr);
    }
    if (window.sessionStorage.getItem(this.sessionUser) != null) {
      this.userAr = JSON.parse(window.sessionStorage.getItem(this.sessionUser) ?? "") ?? null;
      this.user$.next(this.userAr);
    }
  }

  private saveCart(cart: any) {
    window.sessionStorage.setItem(this.sessionCart, JSON.stringify(cart))
  }

  private saveUser(user: any) {
    window.sessionStorage.setItem(this.sessionUser, JSON.stringify(user))
  }

  public cleanCart() {
    this.cartAr = [];
    this.cart$.next(this.cartAr);
    window.sessionStorage.removeItem(this.sessionCart)
  }

  finalize(products: any) : Observable<any> {
    return this.http.post(`${environment.backendUrl}/v1/checkout`, {
      products: products
    })
  }

  cleanUser() {
    SecurityUtils.clearToken();
    this.userAr = null;
    this.user$.next(this.userAr);
    window.sessionStorage.removeItem(this.sessionUser)
  }
}
