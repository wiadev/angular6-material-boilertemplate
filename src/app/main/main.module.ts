import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

const routes = [
  {
      path     : 'app',
      component: MainComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
  ]
})
export class MainModule { }
