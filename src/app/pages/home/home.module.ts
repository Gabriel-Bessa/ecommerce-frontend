import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {PrimeModule} from "../../components/commons/prime.module";
import {ProductTypePipe} from "../../models/product.model";
import {ProductTypeChipComponent} from "../../components/product-type-chip/product-type-chip.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    HomeRoutingModule,
    ProductTypePipe,
    ProductTypeChipComponent
  ]
})
export class HomeModule { }
