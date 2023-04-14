import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavbarInfo, FragmentInfo } from './components/navbar/navbar.component';
import { Constants } from './config/constants';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Enigame Toolkit';
  profileUrl = Constants.profileUrl;
  repoUrl = Constants.repoUrl;

  navlinks = [
    new NavbarInfo("Conversions", "conversions", [
      new FragmentInfo("Text2Codes", "t2c"),
      new FragmentInfo("Letter2Number", "l2n")
    ]),
    new NavbarInfo("Ciphers", 'ciphers'),
    new NavbarInfo("Anagrams", "anagram"),
    new NavbarInfo("Codes", 'codes',[
      new FragmentInfo("Morse Code", "morse"),
      new FragmentInfo("Braille Alphabet", "braille"),
      new FragmentInfo("Semaphore Flags", "semaphore"),
      new FragmentInfo("Tap Code", "tap"),
      new FragmentInfo("Sign Language", "signlang")
    ]),
    new NavbarInfo("Links", 'links'),
  ]

  constructor(private themeService: ThemeService, private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.themeService.setInitialTheme(this.elemRef.nativeElement.ownerDocument.documentElement, this.renderer);
  }

}
