import { Component, OnInit } from '@angular/core';
// import { NavbarInfo, FragmentInfo } from './modules/navigation/components/navbar/navbar.component';
import { Constants } from './config/constants';
import { ThemeService } from './services/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AlertService } from './services/alert-service.service';
import { AlertBoxComponent } from './components/utility/alert-box/alert-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Enitools';
  profileUrl = Constants.profileUrl;
  repoUrl = Constants.repoUrl;

  // isDarkMode: boolean = Constants.darkThemeDefault;
  // theme: string = "dark";

  constructor(private themeService: ThemeService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral("git-icon", sanitizer.bypassSecurityTrustHtml(GIT_ICON));
    iconRegistry.addSvgIconLiteral("github-icon", sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
    console.log("Production: " + environment.production);
  }

  ngOnInit(): void {
    // this.themeService.setInitialTheme(this.elemRef.nativeElement.ownerDocument.documentElement, this.renderer);
    // this.themeService.oldSetInitialTheme();

    // if (!environment.production) {
    //   this.alertService.warning("Currently working in development mode.")
    // }
  }

  // changeTheme(theme: boolean){
  //   this.isDarkMode = theme;
  //   // document.body.setAttribute('data-bs-theme', theme ? Constants.themes["Dark"] : Constants.themes["Light"]);
  // }
}

const GIT_ICON = 
`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
</svg>
`

const GITHUB_ICON =
`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
`
