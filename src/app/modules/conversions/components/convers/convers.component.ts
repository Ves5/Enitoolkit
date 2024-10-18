import { Component } from '@angular/core';
import { ConversionsService } from 'src/app/modules/conversions/services/conversions.service';

@Component({
  selector: 'app-convers',
  templateUrl: './convers.component.html',
  styleUrls: ['./convers.component.css']
})
export class ConversComponent {
  normalText: string = "";
  binaryText: string = "";
  hexText: string = "";
  b64Text: string = "";
  asciiText: string = "";
  rot13Text: string = "";

  letterText: string = "";
  numberText: string = "";

  constructor(private convServ: ConversionsService) {}

  convertNormalText(){
    this.binaryText = this.convServ.text2bin(this.normalText);
    this.hexText = this.convServ.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.convServ.text2ascii(this.normalText);
    this.rot13Text = this.convServ.text2rot13(this.normalText);
  }

  convertBinText(){
    this.normalText = this.convServ.bin2text(this.binaryText);
    this.hexText = this.convServ.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.convServ.text2ascii(this.normalText);
    this.rot13Text = this.convServ.text2rot13(this.normalText);
  }

  convertHexText(){
    this.normalText = this.convServ.hex2text(this.hexText);
    this.binaryText = this.convServ.text2bin(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.convServ.text2ascii(this.normalText);
    this.rot13Text = this.convServ.text2rot13(this.normalText);
  }

  convertB64Text(){
    this.normalText = atob(this.b64Text);
    this.binaryText = this.convServ.text2bin(this.normalText);
    this.hexText = this.convServ.text2hex(this.normalText);
    this.asciiText = this.convServ.text2ascii(this.normalText);
    this.rot13Text = this.convServ.text2rot13(this.normalText);
  }

  convertAsciiText(){
    this.normalText = this.convServ.ascii2text(this.asciiText);
    this.binaryText = this.convServ.text2bin(this.normalText);
    this.hexText = this.convServ.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.rot13Text = this.convServ.text2rot13(this.normalText);
  }

  convertRot13Text(){
    this.normalText = this.convServ.rot132text(this.rot13Text);
    this.binaryText = this.convServ.text2bin(this.normalText);
    this.hexText = this.convServ.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.convServ.text2ascii(this.normalText);
  }

  convertLetterText(){
    this.numberText = this.convServ.letter2num(this.letterText);
  }
  convertNumberText(){
    this.letterText = this.convServ.num2letter(this.numberText);
  }

}
