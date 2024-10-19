import { Injectable } from "@angular/core";
import packageJson from "../../../package.json"

@Injectable()
export class Constants {
    public static readonly title: string = "Enitools";
    public static readonly version: string = packageJson.version;
    public static readonly themes: {[index: string]:any} = {
        "dark": "dark-theme", 
        "light": "light-theme"
    };
    public static readonly darkThemeDefault: boolean = true;
    public static readonly profileUrl: string = "https://github.com/Ves5";
    public static readonly repoUrl: string = "https://github.com/Ves5/Enitoolkit";
}