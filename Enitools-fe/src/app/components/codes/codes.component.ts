import { Component } from '@angular/core';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent {

  morseText: string = "";
  lettersText: string = "";

  convertM2L(){
    this.lettersText = this.morseText.split(' ').map(function (char){
      return MORSE_CODE[char as keyof typeof MORSE_CODE];
    }).join('');
  }

  convertL2M(){
    this.morseText = this.lettersText.split('').map(function (char) {
      return Object.keys(MORSE_CODE).find(key => MORSE_CODE[key as keyof typeof MORSE_CODE] === char.toUpperCase());
    }).join(' ');
  }

  tapText: string = "";
  unTapText: string = "";

  convertFromTap(){
    if (this.tapText == "")
      this.unTapText = "";
    let taps = this.tapText.split(' ').map(function (taps){
      return taps.replace(/./g, '.');
    });
    if (taps.length % 2 == 0 && taps[taps.length - 1] != "") {
      let decode = "";
      for (let i = 0; i < taps.length; i+=2){
        decode += TAP_CODE[taps[i].length - 1][taps[i+1].length - 1];
      }
      this.unTapText = decode;
    }
  }

  convertToTap(){
    if (this.unTapText == "")
      this.tapText = "";
    let letters = this.unTapText.toUpperCase().split('').map(function (letter){
      return letter.replace(/K/, 'C');
    });
    let encode = ""
    letters.forEach(letter => {
      if (letter == " "){
        encode += letter.repeat(3)
        return;
      }
      for(let i = 0; i < TAP_CODE.length; i++){
        for(let j = 0; j < TAP_CODE[i].length; j++){
          if(letter == TAP_CODE[i][j]){
            encode += '.'.repeat(i + 1) + " " + '.'.repeat(j+1) + " ";
          }
        }
      }
    });
    this.tapText = encode;
  }

}

const MORSE_CODE = { 
  '.-':     'A',
  '-...':   'B',
  '-.-.':   'C',
  '-..':    'D',
  '.':      'E',
  '..-.':   'F',
  '--.':    'G',
  '....':   'H',
  '..':     'I',
  '.---':   'J',
  '-.-':    'K',
  '.-..':   'L',
  '--':     'M',
  '-.':     'N',
  '---':    'O',
  '.--.':   'P',
  '--.-':   'Q',
  '.-.':    'R',
  '...':    'S',
  '-':      'T',
  '..-':    'U',
  '...-':   'V',
  '.--':    'W',
  '-..-':   'X',
  '-.--':   'Y',
  '--..':   'Z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

const TAP_CODE = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['L', 'M', 'N', 'O', 'P'],
  ['Q', 'R', 'S', 'T', 'U'],
  ['V', 'W', 'X', 'Y', 'Z']
]