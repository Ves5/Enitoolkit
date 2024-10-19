import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramComponent } from './anagram.component';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { MockApiHttpService } from 'src/test/mock-services';
import { MatDividerStubComponent } from 'src/test/mock-components';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AnagramComponent', () => {
  let component: AnagramComponent;
  let fixture: ComponentFixture<AnagramComponent>;
  let apiService: ApiHttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagramComponent ],
      providers: [{provide: ApiHttpService, useClass: MockApiHttpService}],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
