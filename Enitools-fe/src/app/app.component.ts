import { Component } from '@angular/core';
import { NavbarInfo, FragmentInfo } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Enigame Toolkit';

  navlinks = [
    new NavbarInfo("Conversions", "conversions", [
      new FragmentInfo("Text2Codes", "t2c"),
      new FragmentInfo("Letter2Number", "l2n")
    ]),
    new NavbarInfo("Ciphers", 'ciphers'),
    new NavbarInfo("Codes", 'codes'),
    new NavbarInfo("Links", 'links'),
  ]

}
