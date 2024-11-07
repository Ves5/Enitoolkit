import { TestBed } from '@angular/core/testing';

import { CodesService } from './codes.service';

describe('CodesService', () => {
  let service: CodesService;

  let textUpper = "ENIGAME"
  let textLower = "enigame"
  let morse = ". -. .. --. .- -- ."
  let tap = "1 5 3 3 2 4 2 2 1 1 3 2 1 5"

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Morse Code
  // ----------
  it(`should convert morse code '${morse}' to uppercase text '${textUpper}'`, () => {
    expect(service.convertM2L(morse)).toEqual(textUpper);
  });
  it(`should convert uppercase text '${textUpper}' to morse code '${morse}'`, () => {
    expect(service.convertL2M(textUpper)).toEqual(morse);
  });
  it(`should convert lowercase text '${textLower}' to morse code '${morse}'`, () => {
    expect(service.convertL2M(textLower)).toEqual(morse);
  });

  // Tap Code
  // --------
  it(`should convert tap code '${tap}' to uppercase text '${textUpper}'`, () => {
    expect(service.convertFromTap(tap)).toEqual(textUpper);
  });
  it(`should convert uppercase text '${textUpper}' to tap code '${tap}'`, () => {
    expect(service.convertToTap(textUpper)).toEqual(tap);
  });
  it(`should convert lowercase text '${textLower}' to tap code '${tap}'`, () => {
    expect(service.convertToTap(textLower)).toEqual(tap);
  });
});
