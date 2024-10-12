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
import { TextInputTitledComponent } from './components/utility/text-input-titled/text-input-titled.component';
import { AnagramComponent } from './components/anagram/anagram.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SplitPipe } from './split-pipe.pipe';
import { PopupHelpComponent } from './components/utility/popup-help/popup-help.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        CiphersComponent,
        HomeComponent,
        ConversComponent,
        CodesComponent,
        LinksComponent,
        AnagramComponent,
        SplitPipe,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        TextInputTitledComponent,
        FormsModule,
        PopupHelpComponent,
        MatSlideToggleModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSliderModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatExpansionModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
