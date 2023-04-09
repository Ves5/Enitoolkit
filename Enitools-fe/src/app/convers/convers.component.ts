import { Component } from '@angular/core';

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

  convertNormalText(){
    this.binaryText = this.text2bin(this.normalText);
    this.hexText = this.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.text2ascii(this.normalText);
    this.rot13Text = this.text2rot13(this.normalText);
  }

  convertBinText(){
    this.normalText = this.bin2text(this.binaryText);
    this.hexText = this.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.text2ascii(this.normalText);
    this.rot13Text = this.text2rot13(this.normalText);
  }

  convertHexText(){
    this.normalText = this.hex2text(this.hexText);
    this.binaryText = this.text2bin(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.text2ascii(this.normalText);
    this.rot13Text = this.text2rot13(this.normalText);
  }

  convertB64Text(){
    this.normalText = atob(this.b64Text);
    this.binaryText = this.text2bin(this.normalText);
    this.hexText = this.hex2text(this.hexText);
    this.asciiText = this.text2ascii(this.normalText);
    this.rot13Text = this.text2rot13(this.normalText);
  }

  convertAsciiText(){
    this.normalText = this.ascii2text(this.asciiText);
    this.binaryText = this.text2bin(this.normalText);
    this.hexText = this.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.rot13Text = this.text2rot13(this.normalText);
  }

  convertRot13Text(){
    this.normalText = this.rot132text(this.rot13Text);
    this.binaryText = this.text2bin(this.normalText);
    this.hexText = this.text2hex(this.normalText);
    this.b64Text = btoa(this.normalText);
    this.asciiText = this.text2ascii(this.normalText);
  }

  convertLetterText(){
    this.numberText = this.letter2num(this.letterText);
  }
  convertNumberText(){
    this.letterText = this.num2letter(this.numberText);
  }

  text2bin(text: string){
    return text.split('').map(function (char){
      return char.charCodeAt(0).toString(2);
    }).join(' ');
  }

  bin2text(bin: string){
    if (bin == "")
      return "";
    return bin.split(' ').map(function (byte){
      return String.fromCharCode(parseInt(byte, 2));
    }).join('');
  }

  text2hex(text: string){
    return text.split('').map(function (char){
      return char.charCodeAt(0).toString(16);
    }).join(' ');
  }

  hex2text(hex: string){
    if (hex == "")
      return "";
    return hex.split(' ').map(function (hexbyte){
      return String.fromCharCode(parseInt(hexbyte, 16));
    }).join('');
  }

  text2ascii(text: string){
    return text.split('').map(function (char){
      return char.charCodeAt(0);
    }).join(' ');
  }

  ascii2text(ascii: string){
    if (ascii == "")
      return "";
    return ascii.split(' ').map(function (code){
      return String.fromCharCode(parseInt(code, 10));
    }).join(' ');
  }

  text2rot13(text: string){
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return text.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)]);
  }

  rot132text(rot13: string){
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return rot13.replace(/[a-z]/gi, letter => originalAlpha[cipher.indexOf(letter)]);
  }

  letter2num(letters: string){
    return letters.toUpperCase().split('').map(function (char){
      if(char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65)
        return (char.charCodeAt(0) - 64).toString(10);
      return "";
    }).join(' ');
  }

  num2letter(numbers: string){
    return numbers.split(' ').map(function (num){
      if (parseInt(num) >= 1 && parseInt(num) <= 26)
        return String.fromCharCode(parseInt(num) + 64);
      return "";
    }).join('');
  }

}
