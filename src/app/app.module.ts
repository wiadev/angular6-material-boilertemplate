import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';

const appRoutes: Routes = [
  {
      path      : '**',
      redirectTo: 'login'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
