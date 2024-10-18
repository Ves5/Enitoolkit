import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService, NavInfo } from '../navigation/services/navigation.service';
import { LinksComponent } from './components/links/links.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [LinksComponent]
})
export class LinksModule { 
  navInfo: NavInfo = new NavInfo("Links", "links", [])

  constructor(private navSvc: NavigationService){
    this.navSvc.registerNavInfo(this.navInfo);
  }

}
