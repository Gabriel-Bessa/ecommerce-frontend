import {Component, Input} from '@angular/core';
import {PrimeModule} from "../commons/prime.module";
import {ProductTypeChipComponent} from "../product-type-chip/product-type-chip.component";
import {CartService} from "../service/cart.service";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'ec-product-card',
  standalone: true,
  imports: [
    PrimeModule,
    ProductTypeChipComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input("item") product: any = {}

  constructor(private cartService: CartService, private toast: ToastService) {
  }

  addToCart($event: any): void {
    this.toast.sendSuccess('Carrinho', 'O item foi adicionado ao carrinho com sucesso!');
    this.cartService.addToCart($event)
  }
}
