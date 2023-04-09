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
