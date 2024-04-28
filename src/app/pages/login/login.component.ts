import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {SecurityUtils} from "../utils/security-utils";
import {Router} from "@angular/router";

@Component({
  selector: 'ec-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = "";
  email: string = "";

  constructor(private service: LoginService, private router: Router) {
  }

  login() {
    let formData = new FormData();
    formData.append('email', this.email);
    formData.append('password', this.password);
    this.service.login(formData).subscribe(resp => {
      SecurityUtils.setToken(resp.access_token);
      this.router.navigate(['/home'])
    })
  }
}
