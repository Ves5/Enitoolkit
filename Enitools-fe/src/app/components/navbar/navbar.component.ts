import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private elemRef: ElementRef, private themeService: ThemeService) {}

  @Input() title: string = "";
  @Input() links: NavbarInfo[] = [];

  themes = Constants.themes;
  Object = Object;

  changeTheme(theme: string){
    this.themeService.setTheme(theme, this.elemRef.nativeElement.ownerDocument.documentElement, this.renderer);
  }
  
}

export class NavbarInfo {
  name: string;
  link: string;
  fragments: FragmentInfo[];

  constructor(n: string = "", l: string = "", f: FragmentInfo[] = []){
    this.name = n;
    this.link = l;
    this.fragments = f;
  }
}

export class FragmentInfo {
  name: string;
  id: string;

  constructor(n: string, i: string){
    this.name = n;
    this.id = i;
  }
}