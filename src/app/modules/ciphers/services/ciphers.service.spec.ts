import { TestBed } from '@angular/core/testing';

import { CiphersService } from './ciphers.service';

describe('CiphersService', () => {
  let service: CiphersService;

  let plaintext = "ENIGAME"
  let ceasarCiphertext = "BKFDXJB"
  let shift = 3

  let vigenereCiphertext = "IAQKNUI"
  let key = "ENI"


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiphersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Ceasar Cipher
  // -------------
  it(`should encrypt plaintext '${plaintext}' into ceasar ciphertext '${ceasarCiphertext}' with shift '${shift}'`, () => {
    expect(service.encrypt_caesar(plaintext, shift)).toEqual(ceasarCiphertext);
  });
  it(`should decrypt ceasar ciphertext '${ceasarCiphertext}' into plaintext '${plaintext}' with shift '${shift}'`, () => {
    expect(service.decrypt_caesar(ceasarCiphertext, shift)).toEqual(plaintext);
  });

  // Vigenere Cipher
  // --------------

  it(`should encrypt plaintext '${plaintext}' into vigenere ciphertext '${vigenereCiphertext}' with key '${key}'`, () => {
    expect(service.encrypt_vigenere(plaintext, key)).toEqual(vigenereCiphertext);
  });
  it(`should decrypt vigenere ciphertext '${vigenereCiphertext}' into plaintext '${plaintext}' with key '${key}'`, () => {
    expect(service.decrypt_vigenere(vigenereCiphertext, key)).toEqual(plaintext);
  });
});
