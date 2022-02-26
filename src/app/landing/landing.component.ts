import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  route: string = "table";

  constructor() {}

  ngOnInit(): void {
  }

  changeActiveTab() {
    this.route = this.route === "table" ? "me" : "table";
  }
}
