import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home.service";
import {Page, PageImpl} from "../../models/page.model";
import {CartService} from "../../components/service/cart.service";
import {ToastService} from "../../components/service/toast.service";
import {ProductType} from "../../models/product.model";

@Component({
  selector: 'ec-home',
  templateUrl: 'home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  //FIXME: type
  products: Page<any> = new PageImpl();
  type: ProductType = ProductType.PRODUCT;
  targetCep: string = "";

  constructor(private service: HomeService, private cartService: CartService, private toast: ToastService) {
  }

  ngOnInit(): void {
    this.loadData();
    this.cartService.loadCart();
  }

  loadData() {
    this.service.filter({type: this.type, cep: this.targetCep == "" ? null : this.targetCep}).subscribe(resp => this.products = resp as Page<any>);
  }

  changeTab($event: number) {
    switch ($event) {
      case 0:
        this.type = ProductType.PRODUCT;
        break;
      case 1:
        this.type = ProductType.SINGLE_SERVICE;
        break;
      case 2:
        this.type = ProductType.SERVICE_COMBO;
        break;
      default:
        this.type = ProductType.PRODUCT;
    }
    if(!(ProductType.SERVICE_COMBO == this.type)) {
      this.loadData();
      return;
    }
    this.products = new PageImpl()
  }
}
