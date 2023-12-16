import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleRingComponent } from './double-ring.component';

describe('DoubleRingComponent', () => {
  let component: DoubleRingComponent;
  let fixture: ComponentFixture<DoubleRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleRingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoubleRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
