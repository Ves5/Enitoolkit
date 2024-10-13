import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService, NavInfo } from '../navigation/services/navigation.service';
import { AnagramComponent } from './components/anagram/anagram.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PopupHelpComponent } from 'src/app/components/utility/popup-help/popup-help.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AnagramComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSlideToggleModule,
    PopupHelpComponent,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    AnagramComponent
  ]
})
export class AnagramModule { 
  navInfo: NavInfo = new NavInfo("Anagrams", "anagram", [])

  constructor(private navSvc: NavigationService){
    this.navSvc.registerNavInfo(this.navInfo);
  }

}
