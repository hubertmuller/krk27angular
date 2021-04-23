import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetaleComponent } from './detale/detale.component';
import { BladComponent } from './blad/blad.component';
import { HttpClientModule } from "@angular/common/http";
import { MinidetalComponent } from './minidetal/minidetal.component';
import {AddformComponent, PrzeliczPipe} from './addform/addform.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateformComponent } from './updateform/updateform.component';
import { FullListComponent } from './full-list/full-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetaleComponent,
    BladComponent,
    MinidetalComponent,
    AddformComponent,
    PrzeliczPipe,
    UpdateformComponent,
    FullListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
