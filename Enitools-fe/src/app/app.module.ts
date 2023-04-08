import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CiphersComponent } from './ciphers/ciphers.component';
import { HomeComponent } from './home/home.component';
import { ConversComponent } from './convers/convers.component';
import { CodesComponent } from './codes/codes.component';
import { LinksComponent } from './links/links.component';
import { TextInputTitledComponent } from './text-input-titled/text-input-titled.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CiphersComponent,
    HomeComponent,
    ConversComponent,
    CodesComponent,
    LinksComponent,
    TextInputTitledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
