import { Component } from '@angular/core';
import {NavbarInfo} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Enigame Toolkit';

  navlinks = [
    new NavbarInfo("Conversions", "conversions"),
    new NavbarInfo("Ciphers", 'ciphers'),
    new NavbarInfo("Codes", 'codes'),
    new NavbarInfo("Links", 'links'),
  ]

}
