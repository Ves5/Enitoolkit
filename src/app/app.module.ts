import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navigation/components/navbar/navbar.component';
import { CiphersComponent } from './modules/ciphers/components/ciphers/ciphers.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ConversComponent } from './modules/conversions/components/convers/convers.component';
import { CodesComponent } from './modules/codes/components/codes/codes.component';
import { LinksComponent } from './modules/links/components/links/links.component';
import { TextInputTitledComponent } from './components/utility/text-input-titled/text-input-titled.component';
import { AnagramComponent } from './modules/anagram/components/anagram/anagram.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SplitPipe } from './modules/ciphers/split-pipe.pipe';
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
import { NavigationModule } from './modules/navigation/navigation.module';
import { ConversionsModule } from './modules/conversions/conversions.module';
import { CodesModule } from './modules/codes/codes.module';
import { CiphersModule } from './modules/ciphers/ciphers.module';
import { AnagramModule } from './modules/anagram/anagram.module';
import { LinksModule } from './modules/links/links.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
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
        MatExpansionModule,
        NavigationModule,
        ConversionsModule,
        CodesModule,
        CiphersModule,
        AnagramModule,
        LinksModule,
        HomeModule
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
