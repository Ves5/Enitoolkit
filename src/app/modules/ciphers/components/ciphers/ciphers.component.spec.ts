import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiphersComponent } from './ciphers.component';
import { TextInputTitledStubComponent } from 'src/test/mock-components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SplitPipe } from '../../split-pipe.pipe';
import { FormsModule } from '@angular/forms';

describe('CiphersComponent', () => {
  let component: CiphersComponent;
  let fixture: ComponentFixture<CiphersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiphersComponent, SplitPipe ],
      imports: [ TextInputTitledStubComponent, FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiphersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
