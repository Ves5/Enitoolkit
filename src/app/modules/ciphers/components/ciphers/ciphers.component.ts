import { Component, OnInit } from '@angular/core';
import { CiphersService } from 'src/app/modules/ciphers/services/ciphers.service';

@Component({
  selector: 'app-ciphers',
  templateUrl: './ciphers.component.html',
  styleUrls: ['./ciphers.component.css']
})
export class CiphersComponent implements OnInit{
  ngOnInit(): void {
    this.caesar = this.cipherServ.left_rotate(this.shift);
  }

  alphabet: string = this.cipherServ.alphabet;

  // caesar cipher
  caesar: string = "";
  caesar_input: string = "";
  caesar_output: string = "";
  shift: number = 3;
  max_c: number = 25;
  direction: boolean = true; // true = left; false = right
  caesar_text_help = "Ex. 'enigame is awesome'";
  caesar_cipher_help = "Ex. 'BKFDXJB FP XTBPLJB'";

  constructor(private cipherServ: CiphersService) {}

  shift_alphabet(){
    if(this.direction){
      this.caesar = this.cipherServ.left_rotate(this.shift);
    } else {
      this.caesar = this.cipherServ.right_rotate(this.shift);
    }
  }
  
  encrypt_caesar(){
    this.caesar_output = this.cipherServ.encrypt_caesar(this.caesar_input, this.shift)
  }
  decrypt_caesar(){
    this.caesar_input = this.cipherServ.decrypt_caesar(this.caesar_output, this.shift);
  }

  //vigenere cipher
  keyword: string = "";
  vig_input: string = "";
  vig_output: string = "";
  button_state: boolean = false;
  vig_text_help: string = "Ex. (key=ENI) 'enigameisawesome'"
  vig_cipher_help: string = "Ex. (key=ENI) 'IAQKNUIVAEJMWBUI'"

  encrypt_vig(){
    this.vig_output = this.cipherServ.encrypt_vigenere(this.vig_input, this.keyword);
  }

  decrypt_vig(){
    this.vig_input = this.cipherServ.decrypt_vigenere(this.vig_output, this.keyword);
  }

  btn_toggle(){
    if(this.keyword != "" && (this.vig_input != "" || this.vig_output != "")){
      this.button_state = true;
    } else {
      this.button_state = false;
    }
  }
}
