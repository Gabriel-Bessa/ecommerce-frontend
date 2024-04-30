import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {SecurityUtils} from "../utils/security-utils";
import {Router} from "@angular/router";
import {CartService} from "../../components/service/cart.service";

@Component({
  selector: 'ec-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = "";
  email: string = "";

  constructor(private service: LoginService, private router: Router, private cartService: CartService) {
  }

  login() {
    let formData = new FormData();
    formData.append('email', this.email);
    formData.append('password', this.password);
    this.service.login(formData).subscribe(resp => {
      this.cartService.addUser({email: this.email, token: resp.access_token})
      SecurityUtils.setToken(resp.access_token);
      this.router.navigate(['/home'])
    })
  }

  sendToRegister() {
    this.router.navigate(['register'])
  }
}
