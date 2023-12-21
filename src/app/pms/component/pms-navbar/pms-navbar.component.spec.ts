import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsNavbarComponent } from './pms-navbar.component';

describe('PmsNavbarComponent', () => {
  let component: PmsNavbarComponent;
  let fixture: ComponentFixture<PmsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
