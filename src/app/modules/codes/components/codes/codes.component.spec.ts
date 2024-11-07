import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesComponent } from './codes.component';
import { TextInputTitledStubComponent } from 'src/test/mock-components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CodesComponent', () => {
  let component: CodesComponent;
  let fixture: ComponentFixture<CodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesComponent ],
      imports: [ TextInputTitledStubComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
