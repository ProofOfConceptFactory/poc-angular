import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPageComponent } from './another-page.component';
import {provideRouter} from '@angular/router';
import {routes} from '../app.routes';

describe('AnotherPageComponent', () => {
  let component: AnotherPageComponent;
  let fixture: ComponentFixture<AnotherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherPageComponent],
      providers: [provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AnotherPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Another page');
  });
});
