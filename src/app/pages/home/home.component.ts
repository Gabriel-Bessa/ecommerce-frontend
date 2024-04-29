import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home.service";
import {Page, PageImpl} from "../../models/page.model";
import {CartService} from "../../components/service/cart.service";
import {ToastService} from "../../components/service/toast.service";

@Component({
  selector: 'ec-home',
  templateUrl: 'home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  //FIXME: type
  products: Page<any> = new PageImpl();

  constructor(private service: HomeService, private cartService: CartService, private toast: ToastService) {
  }

  ngOnInit(): void {
    this.service.filter().subscribe(resp => this.products = resp as Page<any>);
    this.cartService.loadCart();
  }

  addToCart($event: any): void {
    this.toast.sendSuccess('Carrinho', 'O item foi adicionado ao carrinho com sucesso!');
    this.cartService.addToCart($event)
  }

}
