import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { ApiService } from './services/api.service';
import { TaskService } from './services/task.service';

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
    DataListModule, ButtonModule, InputTextModule, DragDropModule,
    HttpModule
  ],
  providers: [ApiService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
