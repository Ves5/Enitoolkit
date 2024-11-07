import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponent } from './links.component';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MockApiHttpService } from 'src/test/mock-services';
import { MatDividerStubComponent } from 'src/test/mock-components'

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;
  let apiService: ApiHttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksComponent ],
      providers: [{provide: ApiHttpService, useClass: MockApiHttpService}],
      imports: [MatDividerStubComponent, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});