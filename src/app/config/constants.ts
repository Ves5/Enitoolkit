import { Injectable } from "@angular/core";
import packageJson from "../../../package.json"

@Injectable()
export class Constants {
    public static readonly API_ENDPOINT: string = "https://enitools.vessy.xyz/api/";
    public static readonly version: string = packageJson.version;
    public static readonly themes: {[index: string]:any} = {
        "Dark": "dark", 
        "Light": "light"
    };
    public static readonly darkThemeDefault: boolean = true;
    public static readonly profileUrl: string = "https://github.com/Ves5";
    public static readonly repoUrl: string = "https://github.com/Ves5/Enitoolkit";
}