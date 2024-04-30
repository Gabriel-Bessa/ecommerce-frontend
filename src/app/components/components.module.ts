import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductTypeChipComponent} from "./product-type-chip/product-type-chip.component";
import {ProductCardComponent} from "./product-card/product-card.component";

@NgModule({
  declarations: [],
  exports: [
    ProductTypeChipComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductTypeChipComponent,
    ProductCardComponent
  ]
})
export class ComponentsModule { }
