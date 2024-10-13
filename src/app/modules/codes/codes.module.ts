import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentInfo, NavigationService, NavInfo } from '../navigation/services/navigation.service';
import { CodesComponent } from './components/codes/codes.component';
import { TextInputTitledComponent } from 'src/app/components/utility/text-input-titled/text-input-titled.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [CodesComponent],
  imports: [
    CommonModule,
    TextInputTitledComponent,
    MatDividerModule
  ],
  exports: [CodesComponent]
})
export class CodesModule { 
  navInfo: NavInfo = new NavInfo("Codes", "codes", [
    new FragmentInfo("Morse Code", "morse"),
    new FragmentInfo("Braille Alphabet", "braille"),
    new FragmentInfo("Sempahgore Flags", "semaphore"),
    new FragmentInfo("Tap Code", "tap"),
    new FragmentInfo("Sign Language", "signlang")
  ])

  constructor(private navSvc: NavigationService){
    this.navSvc.registerNavInfo(this.navInfo);
  }

}
