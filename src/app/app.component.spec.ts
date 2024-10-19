import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatIconStubComponent, NavbarStubComponent, TemporaryRouterOutletStubComponent } from 'src/test/mock-components';
import { Constants } from './config/constants';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarStubComponent,
        TemporaryRouterOutletStubComponent,
        MatIconStubComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Enitools'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(Constants.title);
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Enitools-fe app is running!');
  // });
});
