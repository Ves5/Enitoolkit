import { Injectable } from '@angular/core';
import { Constants } from 'src/app/config/constants';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    constructor() {}

    setInitialTheme() : boolean {
        let prefferedTheme = localStorage.getItem("theme");
        if (prefferedTheme != null){
            return this.setTheme(prefferedTheme == Constants.themes["Dark"]);
        } else {
            let ifDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (ifDarkTheme){
                this.setTheme(ifDarkTheme);
                return true;
            } else {
                this.setTheme(!ifDarkTheme);
                return false;
            }
        }
    }

    setTheme(theme: boolean) : boolean {
        localStorage.setItem("theme", theme ? Constants.themes["Dark"] : Constants.themes["Light"]);
        // document.body.setAttribute('data-bs-theme', theme ? Constants.themes["Dark"] : Constants.themes["Light"]);
        return theme;
    }
}