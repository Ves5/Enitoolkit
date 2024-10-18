import { Injectable } from '@angular/core';
import { Constants } from 'src/app/config/constants';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    constructor() {}

    // oldSetInitialTheme() : boolean {
    //     let prefferedTheme = localStorage.getItem("theme");
    //     if (prefferedTheme != null){
    //         return this.oldSetTheme(prefferedTheme == Constants.themes["dark"]);
    //     } else {
    //         let ifDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    //         if (ifDarkTheme){
    //             this.oldSetTheme(ifDarkTheme);
    //             return true;
    //         } else {
    //             this.oldSetTheme(!ifDarkTheme);
    //             return false;
    //         }
    //     }
    // }

    setInitialTheme() : string {
        let ifDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (ifDarkTheme){
            this.setTheme(Constants.themes["dark"]);
            return Constants.themes["dark"];
        } else {
            this.setTheme(Constants.themes["light"]);
            return Constants.themes["light"];
        }
    }

    switchTheme() : string {
        let theme = this.getTheme()
        if (theme == Constants.themes['dark'])
            theme = Constants.themes['light'];
        else
            theme = Constants.themes['dark'];
        this.setTheme(theme);
        return theme
    }

    setTheme(theme: string) {
        localStorage.setItem("theme", theme);
    }

    // oldSetTheme(theme: boolean) : boolean {
    //     localStorage.setItem("theme", theme ? Constants.themes["dark"] : Constants.themes["light"]);
    //     // document.body.setAttribute('data-bs-theme', theme ? Constants.themes["Dark"] : Constants.themes["Light"]);
    //     return theme;
    // }

    getTheme() : string {
        let theme = localStorage.getItem("theme");
        // if the theme keypair doesn't exist, set it
        if (theme == null)
            theme = this.setInitialTheme();
        return theme;
    }
}