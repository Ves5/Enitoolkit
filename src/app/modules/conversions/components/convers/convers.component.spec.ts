import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversComponent } from './convers.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TextInputTitledStubComponent } from 'src/test/mock-components';

describe('ConversComponent', () => {
  let component: ConversComponent;
  let fixture: ComponentFixture<ConversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversComponent ],
      imports: [ TextInputTitledStubComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});