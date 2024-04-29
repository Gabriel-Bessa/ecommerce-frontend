import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SecurityUtils} from "../../pages/utils/security-utils";
import {CartService} from "../service/cart.service";
import {Sidebar} from "primeng/sidebar";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'ec-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  isAuth: boolean = SecurityUtils.isAuth();
  cartSideBarActive: boolean = false;
  userSideBarActive: boolean = false;
  projectName: string = "E-commerce";
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  hasPendingProducts: boolean = false;

  constructor(private router: Router, protected cartService: CartService, private toastService: ToastService) {
  }

  redirectToLogin() {
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

  activeCart() {
    let cart = this.cartService.cart$.getValue()
    if (this.cartService.cart$.getValue() != null && cart.length > 0) {
      this.cartSideBarActive = !this.cartSideBarActive
    }
  }

  finalizeCart() {
    let cart = this.cartService.cart$.getValue()
    this.hasPendingProducts = cart.map(it => it.needsConfirmation).filter(it => it == true)[0] ?? false
    let products = cart.map(it => {
      return {
        id: it.id,
        quantity: 1
      }
    })
    this.makeNextStep(products);
  }

  private makeNextStep(products: { quantity: number; id: any }[]) {
    this.cartSideBarActive = false;
    if (SecurityUtils.isAuth()) {
      this.finalizeStep(products);
      return;
    }
    this.toastService.confirm('Autenticação', 'Deve-se autenticar para finalizar a compra', 'Login', () => {
        this.router.navigate(['login'])
    }, () => {})
  }

  private finalizeStep(products: { quantity: number; id: any }[]) {
    let text = this.hasPendingProducts ? 'Existe um item que precisa de aprovação de terceiros, por motivos de análise de cobertura!' : ''
    this.toastService.confirm('Finalizar compra?', text, 'Finalizar', () => {
      this.cartService.finalize(products).subscribe(resp => {
        this.toastService.sendSuccess('Compra', 'A compra foi realizada com sucesso!')
        this.cartService.cleanCart()
      })
    }, () => {
      this.toastService.sendError('Compra', 'Encontramos um problema...')
      this.cartSideBarActive = true;
    })
  }

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  logout() {
    console.log("dsadas")
    this.cartService.cleanUser()
    this.router.navigate(['login'])
  }
}
