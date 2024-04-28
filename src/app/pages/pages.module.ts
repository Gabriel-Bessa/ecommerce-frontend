import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import {PrimeModule} from "../components/commons/prime.module";
import {HomeModule} from "./home/home.module";
import {LoginComponent} from "./login/login.component";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    PagesRoutingModule,
    HomeModule,
    PrimeModule
  ]
})
export class PagesModule { }
