import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionsService {

  constructor() { }

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
    }).join('');
  }

  private alphabet : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private cipher : string = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"

  text2rot13(text: string){
    return text.replace(/[a-z]/gi, letter => this.cipher[this.alphabet.indexOf(letter)]);
  }

  rot132text(rot13: string){
    return rot13.replace(/[a-z]/gi, letter => this.alphabet[this.cipher.indexOf(letter)]);
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
