import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import {PrimeModule} from "../components/commons/prime.module";
import {HomeModule} from "./home/home.module";



@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    HomeModule,
    PrimeModule
  ]
})
export class PagesModule { }
