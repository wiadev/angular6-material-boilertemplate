import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
      path     : 'login',
      component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
