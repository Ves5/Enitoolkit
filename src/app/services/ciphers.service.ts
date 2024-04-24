import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiphersService {

  alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor() { }

  get_alphabet() {
    return this.alphabet;
  }

  right_rotate(sh: number) {
    return this.alphabet.substring(sh, this.alphabet.length) + this.alphabet.substring(0, sh);
  }

  left_rotate(sh: number) {
    return this.right_rotate(this.alphabet.length - sh);
  }

  encrypt_caesar(input: string, sh: number){
    let shifted = this.left_rotate(sh);
    return input.toUpperCase().split('').map(char => {
      if (this.alphabet.indexOf(char) >= 0)
        return shifted[this.alphabet.indexOf(char)];
      return char;
    }).join('');
  }

  decrypt_caesar(input: string, sh: number){
    let shifted = this.left_rotate(sh);
    return input.toUpperCase().split('').map(char => {
      if (shifted.indexOf(char) >= 0)
        return this.alphabet[shifted.indexOf(char)];
      return char;
    }).join('')
  }

  construct_key(base: string, keyword: string){
    let reps: number = Math.floor(base.length / keyword.length);
    let rem: number = base.length % keyword.length;

    return (keyword.repeat(reps) + keyword.substring(0, rem)).toUpperCase();
  }

  encrypt_vigenere(input: string, keyword: string){
    var cipher = "";
    let key_v = this.construct_key(input, keyword)
    input = input.toUpperCase();
    for (let i = 0; i < input.length; i++){
      let x = (input[i].charCodeAt(0) + key_v[i].charCodeAt(0)) %26;
      x += 'A'.charCodeAt(0);
      cipher += String.fromCharCode(x);
    }
    return cipher;
  }

  decrypt_vig(input: string, keyword: string){
    var plain = "";
    let key_v = this.construct_key(input, keyword)
    input = input.toUpperCase();
    for (let i = 0; i < input.length; i++){
      let x = (input[i].charCodeAt(0) - key_v[i].charCodeAt(0) + 26) %26;
      x += 'A'.charCodeAt(0);
      plain += String.fromCharCode(x);
    }
    return plain;
  }
}
