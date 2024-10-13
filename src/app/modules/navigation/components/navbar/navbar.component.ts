import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationService, NavInfo } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver, private navSvc: NavigationService) {}
  ngOnInit(): void {
    this.navLinks = this.navSvc.getNavInfoTable();
  }

  @Input() title: string = "";
  navLinks: NavInfo[] = [];

  themes = Constants.themes;
  Object = Object;

  isDarkTheme: boolean = Constants.darkThemeDefault;
  @Output() themeChange: EventEmitter<boolean> = new EventEmitter();

  // changeTheme(theme: string){
  //   this.themeService.setTheme(theme, this.elemRef.nativeElement.ownerDocument.documentElement, this.renderer);
  // }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  themeToggle(){
    this.themeChange.emit(!this.isDarkTheme);
  }
  
}

// export class NavbarInfo {
//   name: string;
//   link: string;
//   fragments: FragmentInfo[];

//   constructor(n: string = "", l: string = "", f: FragmentInfo[] = []){
//     this.name = n;
//     this.link = l;
//     this.fragments = f;
//   }
// }

// export class FragmentInfo {
//   name: string;
//   id: string;

//   constructor(n: string, i: string){
//     this.name = n;
//     this.id = i;
//   }
// }