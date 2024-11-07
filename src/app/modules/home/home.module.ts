import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class HomeModule { }
