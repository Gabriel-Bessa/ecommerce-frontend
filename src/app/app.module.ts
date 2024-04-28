import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routes";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {BrowserModule} from "@angular/platform-browser";
import {PrimeModule} from "./components/commons/prime.module";
import {PagesModule} from "./pages/pages.module";
import {ComponentsModule} from "./components/components.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorService} from "./components/service/interceptor.service";


@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    PrimeModule,
    PagesModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
