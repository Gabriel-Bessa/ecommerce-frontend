import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {Page, PageImpl} from "../../models/page.model";

@Component({
  selector: 'ec-home',
  templateUrl: 'home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  //FIXME: type
  products: Page<any> = new PageImpl();

  constructor(private service: HomeService) {
  }

  ngOnInit(): void {
    this.service.filter().subscribe(resp => this.products = resp as Page<any>);
  }

}
