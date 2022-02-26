import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';

import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ButtonBehaviorDirective } from './directives/button-behavior.directive';

@NgModule({
  declarations: [
    LandingComponent,
    TableComponent,
    TableItemComponent,
    AboutMeComponent,
    ButtonBehaviorDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
  ],
  exports: [],
})
export class LandingModule { }
