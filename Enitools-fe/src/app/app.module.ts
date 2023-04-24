import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CiphersComponent } from './components/ciphers/ciphers.component';
import { HomeComponent } from './components/home/home.component';
import { ConversComponent } from './components/convers/convers.component';
import { CodesComponent } from './components/codes/codes.component';
import { LinksComponent } from './components/links/links.component';
import { TextInputTitledComponent } from './components/text-input-titled/text-input-titled.component';
import { AnagramComponent } from './components/anagram/anagram.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SplitPipe } from './split-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CiphersComponent,
    HomeComponent,
    ConversComponent,
    CodesComponent,
    LinksComponent,
    AnagramComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TextInputTitledComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
