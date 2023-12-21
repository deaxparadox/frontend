import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsHeadingDetailComponent } from './pms-heading-detail.component';

describe('PmsHeadingDetailComponent', () => {
  let component: PmsHeadingDetailComponent;
  let fixture: ComponentFixture<PmsHeadingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmsHeadingDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmsHeadingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
