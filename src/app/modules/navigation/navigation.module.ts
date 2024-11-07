import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavigationModule {
  constructor() {
    // Constructor implementation
  }

 }
