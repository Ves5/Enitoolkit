import { Component } from '@angular/core';
import { CodesService } from 'src/app/services/codes.service';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent {

  constructor(private codesServ: CodesService) {}

  morseText: string = "";
  lettersText: string = "";

  convertM2L(){
    this.lettersText = this.codesServ.convertM2L(this.morseText);
  }

  convertL2M(){
    this.morseText = this.codesServ.convertL2M(this.lettersText);
  }

  tapText: string = "";
  unTapText: string = "";

  convertFromTap(){
    this.unTapText = this.codesServ.convertFromTap(this.tapText);
  }

  convertToTap(){
    this.tapText = this.codesServ.convertToTap(this.unTapText);
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