import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArgentinaProgramaComponent } from './components/argentina-programa/argentina-programa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArgentinaProgramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
