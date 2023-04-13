import { Injectable, Renderer2 } from '@angular/core';
import { Constants } from 'src/app/config/constants';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    constructor() {}

    setInitialTheme(tag: any, renderer: Renderer2){
        let prefferedTheme = localStorage.getItem("theme");
        if (prefferedTheme != null){
        this.setTheme(prefferedTheme, tag, renderer);
        } else {
            let ifDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (ifDarkTheme){
                this.setTheme(Constants.themes['Dark'], tag, renderer);
            } else {
                this.setTheme(Constants.themes['Light'], tag, renderer);
            }
        }
    }

    setTheme(theme: string, tag: any, renderer: Renderer2) {
        localStorage.setItem("theme", theme);
        renderer.setAttribute(tag, 'data-bs-theme', theme);
    }
}