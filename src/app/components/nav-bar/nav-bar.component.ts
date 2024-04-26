import {Component} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from "primeng/api";

@Component({
  selector: 'ec-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  topMenuActive: boolean = true;
  userSideBarActive: boolean = false;
  items: MenuItem[] = [
    {icon: 'plus', label: 'test', command(event: MenuItemCommandEvent) {
      }}
  ];
  projectName: string = "E-commerce";
}
