import { TestBed } from '@angular/core/testing';

import { ConversionsService } from './conversions.service';

describe('ConversionsService', () => {
  let service: ConversionsService;

  let textLower = "enigame"
  let binaryLower = "1100101 1101110 1101001 1100111 1100001 1101101 1100101"
  let hexLower = '65 6e 69 67 61 6d 65'
  let base64Lower= "ZW5pZ2FtZQ=="
  let asciiDecLower = "101 110 105 103 97 109 101"
  let rot13Lower = "ravtnzr"

  let textUpper = "ENIGAME"
  let binaryUpper = "1000101 1001110 1001001 1000111 1000001 1001101 1000101"
  let hexUpper = "45 4e 49 47 41 4d 45"
  let base64Upper = "RU5JR0FNRQ=="
  let asciiDecUpper = '69 78 73 71 65 77 69'
  let rot13Upper = "RAVTNZR"

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ------------------ Tests ------------------

  // Classic conversions
  // -------------------

  // text lowercase to codes
  it(`should convert text lowercase '${textLower}' to binary '${binaryLower}'`, () => {
    expect(service.text2bin(textLower)).toEqual(binaryLower);
  })

  it(`should convert text lowercase '${textLower}' to hex '${hexLower}'`, () => {
    expect(service.text2hex(textLower)).toEqual(hexLower);
  })

  it(`should convert text lowercase '${textLower}' to base64 '${base64Lower}'`, () => {
    expect(btoa(textLower)).toEqual(base64Lower);
  })

  it(`should convert text lowercase '${textLower}' to ascii decimals '${binaryLower}'`, () => {
    expect(service.text2ascii(textLower)).toEqual(asciiDecLower);
  })

  it(`should convert text lowercase '${textLower}' to rot13 '${binaryLower}'`, () => {
    expect(service.text2rot13(textLower)).toEqual(rot13Lower);
  })

  // codes to text lowercase
  it(`should convert binary '${binaryLower}' to text lowercase '${textLower}'`, () => {
    expect(service.bin2text(binaryLower)).toEqual(textLower);
  })

  it(`should convert hex '${hexLower}' to text lowercase '${textLower}'`, () => {
    expect(service.hex2text(hexLower)).toEqual(textLower);
  })

  it(`should convert base64 '${base64Lower}' to text lowercase '${textLower}'`, () => {
    expect(atob(base64Lower)).toEqual(textLower);
  })

  it(`should convert ascii decimals '${asciiDecLower}' to text lowercase '${textLower}'`, () => {
    expect(service.ascii2text(asciiDecLower)).toEqual(textLower);
  })

  it(`should convert rot13 '${rot13Lower}' to text lowercase '${textLower}'`, () => {
    expect(service.rot132text(rot13Lower)).toEqual(textLower);
  })

  // text uppercase to codes
  it(`should convert text uppercase'${textUpper}' to binary '${binaryUpper}'`, () => {
    expect(service.text2bin(textUpper)).toEqual(binaryUpper);
  })

  it(`should convert text uppercase '${textUpper}' to hex '${hexUpper}'`, () => {
    expect(service.text2hex(textUpper)).toEqual(hexUpper);
  })

  it(`should convert text uppercase '${textUpper}' to base64 '${base64Upper}'`, () => {
    expect(btoa(textUpper)).toEqual(base64Upper);
  })

  it(`should convert text uppercase '${textUpper}' to ascii decimals '${binaryUpper}'`, () => {
    expect(service.text2ascii(textUpper)).toEqual(asciiDecUpper);
  })

  it(`should convert text uppercase '${textUpper}' to rot13 '${binaryUpper}'`, () => {
    expect(service.text2rot13(textUpper)).toEqual(rot13Upper);
  })

  // codes to text uppercase
  it(`should convert binary '${binaryUpper}' to text uppercase '${textUpper}'`, () => {
    expect(service.bin2text(binaryUpper)).toEqual(textUpper);
  })

  it(`should convert hex '${hexUpper}' to text uppercase '${textUpper}'`, () => {
    expect(service.hex2text(hexUpper)).toEqual(textUpper);
  })

  it(`should convert base64 '${base64Upper}' to text uppercase '${textUpper}'`, () => {
    expect(atob(base64Upper)).toEqual(textUpper);
  })

  it(`should convert ascii decimals '${asciiDecUpper}' to text uppercase '${textUpper}'`, () => {
    expect(service.ascii2text(asciiDecUpper)).toEqual(textUpper);
  })

  it(`should convert rot13 '${rot13Upper}' to text uppercase '${textUpper}'`, () => {
    expect(service.rot132text(rot13Upper)).toEqual(textUpper);
  })

  // Letter to number conversions
  // ----------------------------

  let numbers = "5 14 9 7 1 13 5"

  it(`should convert text lowercase '${textLower}' to numbers '${numbers}'`, () => {
    expect(service.letter2num(textLower)).toEqual(numbers);
  })

  it(`should convert text uppercase '${textUpper}' to numbers '${numbers}'`, () => {
    expect(service.letter2num(textUpper)).toEqual(numbers);
  })

  it(`should convert numbers '${numbers}' to text uppercase '${textUpper}'`, () => {
    expect(service.letter2num(textLower)).toEqual(numbers);
  })
});
