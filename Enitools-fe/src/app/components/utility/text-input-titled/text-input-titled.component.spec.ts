import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputTitledComponent } from './text-input-titled.component';

describe('TextInputTitledComponent', () => {
  let component: TextInputTitledComponent;
  let fixture: ComponentFixture<TextInputTitledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputTitledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputTitledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
