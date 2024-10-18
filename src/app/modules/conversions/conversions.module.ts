import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentInfo, NavigationService, NavInfo } from '../navigation/services/navigation.service';
import { ConversComponent } from './components/convers/convers.component';
import { TextInputTitledComponent } from 'src/app/components/utility/text-input-titled/text-input-titled.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [ConversComponent],
  imports: [
    CommonModule,
    TextInputTitledComponent,
    MatDividerModule
  ],
  exports: [ConversComponent]
})
export class ConversionsModule { 
  navInfo: NavInfo = new NavInfo("Conversions", "conversions", [
    new FragmentInfo("Text2Codes", "t2c"),
    new FragmentInfo("Letter2Number", "l2n")
  ])

  constructor(private navSvc: NavigationService){
    this.navSvc.registerNavInfo(this.navInfo);
  }

}
