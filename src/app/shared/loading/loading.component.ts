import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  message: String = "falló algo";

  possibleMessage: String[] = [
    "no tenemos respuesta del servidor",
    "algo salió mal",
    "tienes que intentarlo más tarde",
    "estamos teniendo un mal día",
  ];

  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const source = interval(3000);
    this.subscription = source.subscribe(() => this.changeMessage());
  }

  changeMessage() {
    const message = this.possibleMessage[Math.floor(Math.random()*this.possibleMessage.length)]
    this.message = message;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
