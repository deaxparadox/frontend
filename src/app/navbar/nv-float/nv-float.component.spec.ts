import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvFloatComponent } from './nv-float.component';

describe('NvFloatComponent', () => {
  let component: NvFloatComponent;
  let fixture: ComponentFixture<NvFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NvFloatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NvFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
