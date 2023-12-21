import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsHeadingUpdateComponent } from './pms-heading-update.component';

describe('PmsHeadingUpdateComponent', () => {
  let component: PmsHeadingUpdateComponent;
  let fixture: ComponentFixture<PmsHeadingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsHeadingUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsHeadingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
