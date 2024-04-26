import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routes";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {BrowserModule} from "@angular/platform-browser";
import {PrimeModule} from "./components/commons/prime.module";
import {PagesModule} from "./pages/pages.module";


@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    PrimeModule,
    PagesModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
