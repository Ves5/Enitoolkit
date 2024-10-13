import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentInfo, NavigationService, NavInfo } from '../navigation/services/navigation.service';
import { CiphersComponent } from './components/ciphers/ciphers.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TextInputTitledComponent } from 'src/app/components/utility/text-input-titled/text-input-titled.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SplitPipe } from './split-pipe.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CiphersComponent,
    SplitPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextInputTitledComponent,
    MatDividerModule,
    MatSliderModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [CiphersComponent]
})
export class CiphersModule { 
  navInfo: NavInfo = new NavInfo("Ciphers", "ciphers", [])

  constructor(private navSvc: NavigationService){
    this.navSvc.registerNavInfo(this.navInfo);
  }

}
