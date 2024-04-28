import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SecurityUtils} from "../../pages/utils/security-utils";

@Component({
  selector: 'ec-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  isAuth: boolean = SecurityUtils.isAuth();
  userSideBarActive: boolean = false;
  projectName: string = "E-commerce";

  constructor(private router: Router) {
  }

  redirectToLogin() {
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }
}
