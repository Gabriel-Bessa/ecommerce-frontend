import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', loadChildren: () => import('./pages/pages-routing.module').then(module => module.PagesRoutingModule)}
    ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', useHash: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
