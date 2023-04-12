import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.css']
})
export class CiphersComponent implements OnInit{
  ngOnInit(): void {
    this.caesar = this.left_rotate(this.shift);
  }

  alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // caesar cipher
  caesar: string = "";
  caesar_input: string = "";
  caesar_output: string = "";
  shift: number = 3;
  max_c: number = 25;
  direction: boolean = true; // true = left; false = right
  
  right_rotate(sh: number) {
    return this.alphabet.substring(sh, this.alphabet.length) + this.alphabet.substring(0, sh);
  }

  left_rotate(sh: number) {
    return this.right_rotate(this.alphabet.length - sh);
  }

  shift_alphabet(){
    if(this.direction){
      this.caesar = this.left_rotate(this.shift);
    } else {
      this.caesar = this.right_rotate(this.shift);
    }
  }
  
  encrypt_caesar(){
    this.caesar_output = this.caesar_input.toUpperCase().split('').map(char => {
      if (this.alphabet.indexOf(char) >= 0)
        return this.caesar[this.alphabet.indexOf(char)];
      return char;
    }).join('')
  }
  decrypt_caesar(){
    this.caesar_input = this.caesar_output.toUpperCase().split('').map(char => {
      if (this.caesar.indexOf(char) >= 0)
        return this.alphabet[this.caesar.indexOf(char)];
      return char;
    }).join('')
  }

  //vigenere cipher
  keyword: string = "";
  key_v: string = "";
  vig_input: string = "";
  vig_output: string = "";
  button_state: boolean = false;

  construct_key(base: string){
    let reps: number = Math.floor(base.length / this.keyword.length);
    let rem: number = base.length % this.keyword.length;

    this.key_v = (this.keyword.repeat(reps) + this.keyword.substring(0, rem)).toUpperCase();
  }

  encrypt_vig(){
    var cipher = "";
    this.construct_key(this.vig_input)
    this.vig_input = this.vig_input.toUpperCase();
    for (let i = 0; i < this.vig_input.length; i++){
      let x = (this.vig_input[i].charCodeAt(0) + this.key_v[i].charCodeAt(0)) %26;
      x += 'A'.charCodeAt(0);
      cipher += String.fromCharCode(x);
    }
    this.vig_output = cipher;
  }

  decrypt_vig(){
    var plain = "";
    this.construct_key(this.vig_output)
    this.vig_output = this.vig_output.toUpperCase();
    for (let i = 0; i < this.vig_output.length; i++){
      let x = (this.vig_output[i].charCodeAt(0) - this.key_v[i].charCodeAt(0) + 26) %26;
      x += 'A'.charCodeAt(0);
      plain += String.fromCharCode(x);
    }
    this.vig_input = plain;
  }

  btn_toggle(){
    if(this.keyword != "" && (this.vig_input != "" || this.vig_output != "")){
      this.button_state = true;
    } else {
      this.button_state = false;
    }
  }
}
