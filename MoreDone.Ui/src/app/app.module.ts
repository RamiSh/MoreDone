import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import {
  InputTextModule,
  DataListModule,
  ButtonModule,
  DragDropModule
} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    //primeng modules
    DataListModule, ButtonModule, InputTextModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
