import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodesService {

  constructor() { }

  convertM2L(input: string){
    return input.split(' ').map(function (char){
      return MORSE_CODE[char as keyof typeof MORSE_CODE];
    }).join('');
  }

  convertL2M(input: string){
    return input.split('').map(function (char) {
      return Object.keys(MORSE_CODE).find(key => MORSE_CODE[key as keyof typeof MORSE_CODE] === char.toUpperCase());
    }).join(' ');
  }

  convertFromTap(input: string){
    let taps = input.trim().split(' ').map(function (taps){
      return Number(taps);
    });
    let decode = "";
    if (taps.length > 1)
      for (let i = 0; i < taps.length - (taps.length % 2); i += 2){
        if (taps[i] > 5 || taps[i+1] > 5)
          continue;
        decode += TAP_CODE[taps[i] - 1][taps[i+1] - 1]
      }
    return decode;
  }

  convertToTap(input: string){
    let letters = input.toUpperCase().split('').map(function (letter){
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
            encode += String(i + 1) + " " + String(j+1) + " ";
          }
        }
      }
    });
    return encode;
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