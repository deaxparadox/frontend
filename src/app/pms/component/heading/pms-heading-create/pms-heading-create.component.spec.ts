import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsHeadingCreateComponent } from './pms-heading-create.component';

describe('PmsHeadingCreateComponent', () => {
  let component: PmsHeadingCreateComponent;
  let fixture: ComponentFixture<PmsHeadingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsHeadingCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsHeadingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
