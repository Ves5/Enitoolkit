import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversComponent } from './convers.component';

describe('ConversComponent', () => {
  let component: ConversComponent;
  let fixture: ComponentFixture<ConversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversComponent ]
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
