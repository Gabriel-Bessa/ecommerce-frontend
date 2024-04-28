import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductTypeChipComponent} from "./product-type-chip/product-type-chip.component";

@NgModule({
  declarations: [],
  exports: [
    ProductTypeChipComponent
  ],
  imports: [
    CommonModule,
    ProductTypeChipComponent
  ]
})
export class ComponentsModule { }
