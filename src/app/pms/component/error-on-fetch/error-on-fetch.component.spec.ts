import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOnFetchComponent } from './error-on-fetch.component';

describe('ErrorOnFetchComponent', () => {
  let component: ErrorOnFetchComponent;
  let fixture: ComponentFixture<ErrorOnFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorOnFetchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorOnFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
