import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private config: PrimeNGConfig) {
  }

  ngOnInit() {
    this.config.setTranslation({
      accept: 'Aceitar', reject: 'Cancelar',
    });
  }

}
