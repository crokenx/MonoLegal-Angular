import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { TableComponent } from './table/table.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', component: LandingComponent, children: [
    { path: 'table', component: TableComponent },
    { path: 'me', component: AboutMeComponent },
    { path: 'me', component: AboutMeComponent },
    { path: '', redirectTo: 'table', pathMatch: 'full'},
  ]},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LandingRoutingModule { }
