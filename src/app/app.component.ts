import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'ec-root', templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private config: PrimeNGConfig) {
  }

  ngOnInit() {
    this.config.setTranslation({
      accept: 'Aceitar',
      reject: 'Cancelar',
      weak: 'Semana',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar'
    });
  }

}
