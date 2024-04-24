import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHelpComponent } from './popup-help.component';

describe('PopupHelpComponent', () => {
  let component: PopupHelpComponent;
  let fixture: ComponentFixture<PopupHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
