import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import {PrimeModule} from "../components/commons/prime.module";
import {HomeModule} from "./home/home.module";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {StepperModule} from "primeng/stepper";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    PagesRoutingModule,
    HomeModule,
    PrimeModule,
    IconFieldModule,
    InputIconModule,
    NgxMaskDirective
  ],
  providers: [
    provideEnvironmentNgxMask(),
  ]
})
export class PagesModule { }
